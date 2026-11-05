import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import Beasties from 'beasties';
import postcss from 'postcss';
import * as sass from 'sass';
import { parseDocument, DomUtils } from 'htmlparser2';

// Only the prerendered home document is changed. The CSS assets, Flight payloads
// and other routes remain Next-owned, including their normal navigation caching.
const output = path.resolve('.next');
const filename = path.join(output, 'server/app/index.html');
const prerender = JSON.parse(await readFile(path.join(output, 'prerender-manifest.json'), 'utf8'));
assert(prerender.routes['/']?.initialRevalidateSeconds === false,
  'Mobile critical CSS requires a static home route without ISR');
const html = await readFile(filename, 'utf8');
assert(!html.includes('id="mobile-critical-css"'), 'Run a fresh Next build first');
assert(html.includes('data-critical-states='), 'Home must contain the critical Hero');
const head = html.slice(0, html.indexOf('</head>'));
const links = [...head.matchAll(/<link\b[^>]*\brel="stylesheet"[^>]*>/g)].map(([link]) => link);
assert(links.length, 'Expected Next stylesheet resources in the home head');
// Vercel adds ?dpl=... for deployment skew protection. Beasties strips URL
// queries/fragments when reading local assets; keep them on the emitted links.
assert(links.every(link => /href="\/_next\/[^"?#]+\.css(?:[?#][^"]*)?"/.test(link) && !/\bmedia=/.test(link)),
  'Review critical CSS delivery: Next stylesheet markup has changed');

// Read the actual Sass breakpoint rather than maintaining a second value in JS.
const breakpointCss = sass.compileString(
  '@use "app/styles/core/variables" as *; :root { --desktop: #{$break-point-small}; }',
  { loadPaths: [process.cwd()] },
).css;
const desktop = Number(breakpointCss.match(/--desktop:\s*([\d.]+)px/)[1]);
const mobileMedia = `screen and (width < ${desktop}px)`;
const desktopMedia = `screen and (min-width: ${desktop}px)`;

const fontRules = new Map();
const stateClasses = [...html.matchAll(/data-critical-states="([^"]+)"/g)]
  .flatMap(([, classes]) => classes.split(/\s+/));
const processor = new Beasties({
  path: output,
  publicPath: '/_next/',
  preload: false,
  pruneSource: false,
  preloadFonts: false,
  fonts: false,
  // Include the interactive Hero states using actual CSS Module exports.
  allowRules: stateClasses.map(name => `.${name}`),
  logLevel: 'warn',
});
const getCssAsset = processor.getCssAsset.bind(processor);
processor.getCssAsset = async (href, style) => {
  const css = postcss.parse(await getCssAsset(href, style));
  const fonts = [];
  css.walkAtRules('media', rule => {
    // Keep tablet, orientation, motion and compound queries. Only discard
    // branches whose minimum width makes them impossible on mobile.
    const branches = postcss.list.comma(rule.params);
    const mobileBranches = branches.filter(query => {
      const minimum = query.match(/\(min-width:\s*([\d.]+)px\)/);
      return !minimum || Number(minimum[1]) < desktop || /\bnot\b/.test(query);
    });
    if (!mobileBranches.length) rule.remove();
    else rule.params = mobileBranches.join(',');
  });
  css.walkAtRules('font-face', rule => {
    // Keep next/font's declarations and metric-adjusted fallbacks verbatim,
    // rebasing only asset URLs because inline CSS resolves relative to /.
    const font = rule.clone();
    font.walkDecls(decl => {
      decl.value = decl.value.replace(/url\(([^)]+)\)/g, (match, value) => {
        const url = value.replace(/^["']|["']$/g, '');
        return /^(?:[a-z]+:|\/)/i.test(url) ? match
          : `url("${new URL(url, `https://build.invalid${href}`).pathname}")`;
      });
    });
    fonts.push(font.toString());
    rule.remove();
  });
  fontRules.set(href, fonts.join(''));
  return css.toString();
};

// Evaluate a copy with only the header, Hero and their original ancestors.
// Keep ancestor relationships intact: nested Module selectors depend on them.
// Discard this serialized HTML; never rewrite React's HTML/Flight payloads.
const document = parseDocument(html);
const find = predicate => DomUtils.findOne(predicate, document.children, true);
const body = find(node => node.name === 'body');
const header = find(node => node.name === 'header');
const hero = find(node => Object.hasOwn(node.attribs, 'data-critical-states'));
assert(body && header?.parent === body && hero?.parent?.name === 'main'
  && hero.parent.parent === body, 'Review critical shell markup');
for (const node of [...body.children]) {
  if (node !== header && node !== hero.parent) DomUtils.removeElement(node);
}
for (const node of [...hero.parent.children]) {
  if (node !== hero) DomUtils.removeElement(node);
}
const extracted = await processor.process(DomUtils.getOuterHTML(document));
const rules = [...extracted.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)]
  .map(([, css]) => css).join('');
assert(rules.length > 0 && rules.includes('object-fit:cover'), 'Hero extraction failed');
const critical = links.map(link => fontRules.get(link.match(/href="([^"]+)"/)[1])).join('') + rules;
assert(!/<\/style/i.test(critical), 'Unsafe inline CSS');

// The small native loader is independent of React/hydration. Download every
// stylesheet immediately, then activate them together in their original order.
// Errors also restore ordinary links, so the pending guard cannot get stuck.
function activateMobileStyles(remaining) {
  const ready = event => {
    if (!event.target.matches?.('link[data-mobile-css]')) return;
    // Listen before the parser reaches the links, including cached responses.
    event.target.removeAttribute('data-mobile-css');
    if (--remaining) return;
    for (const link of document.querySelectorAll('link[data-mobile-full-css]')) {
      link.removeAttribute('media');
      link.removeAttribute('data-mobile-full-css');
    }
    document.getElementById('mobile-css-pending')?.remove();
    document.removeEventListener('load', ready, true);
    document.removeEventListener('error', ready, true);
  };
  document.addEventListener('load', ready, true);
  document.addEventListener('error', ready, true);
}

// Prevent a fast scroll exposing unstyled lower sections while their CSS is
// still in flight. This guard exists only with JS and is removed on CSS load.
const guard = `main>:not([data-critical-states]),body>footer{display:none!important}`;
const inline = `<style id="mobile-critical-css" media="${mobileMedia}">${critical}</style>`;
const pending = `<script>(()=>{const s=document.createElement('style');s.id='mobile-css-pending';s.media=${JSON.stringify(mobileMedia)};s.textContent=${JSON.stringify(guard)};document.head.appendChild(s)})()</script>`;
const activate = `<script>(${activateMobileStyles.toString()})(${links.length})</script>`;
let result = html.replace(links[0], inline + pending + activate + links[0]);
for (const link of links) {
  const href = link.match(/href="([^"]+)"/)[1];
  const deferred = link.replace('/>', ` media="${desktopMedia}" data-mobile-css="" data-mobile-full-css=""/>`);
  const preload = `<link rel="preload" as="style" href="${href}" media="${mobileMedia}"/>`;
  result = result.replace(link, preload + deferred);
}
result = result.replace('</head>', `<noscript>${links.join('')}</noscript></head>`);
await writeFile(filename, result);
console.log(`Mobile critical CSS: ${Buffer.byteLength(critical)} bytes; ${links.length} stylesheets deferred on / only.`);
