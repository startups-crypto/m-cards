This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mobile critical CSS

Deploy with `pnpm build` (or `npm run build`), which runs Next's production build
and then `scripts/mobile-critical-css.mjs`. The second step processes only the
prerendered home HTML in `.next/server/app/index.html`; it requires `/` to remain
static. Changes to Next's resource markup fail the build instead of silently
disabling the optimization. Running `next build` directly skips this step.

The script extracts the header, Hero and their global dependencies from the
compiled CSS, retaining CSS Module names, cascade order, tablet media queries,
local font declarations and fallback metrics. `data-critical-states` on Hero
supplies its CSS Module exports for states absent from the initial HTML. SCSS
remains the sole source of visual rules; the mobile boundary comes from
`$break-point-small` in `_variables.scss`.

The extracted `<style id="mobile-critical-css">` is present in the server HTML
head and applies only below that boundary. Full stylesheets are preloaded
immediately on mobile and activated together by a small native load listener,
before React needs to run. Lower sections are temporarily excluded from layout
until those styles are ready, preventing unstyled overflow and flashes. Desktop
keeps render-blocking stylesheets; `<noscript>` preserves full styling without
JavaScript. CSS files, Flight payloads and other pages are unchanged, so client
navigation continues to use Next's stylesheet loading and cache.

Check delivery using a production server (`pnpm start`): inspect the response
source, throttle CSS requests, and compare the header/Hero before and after CSS
loads at 500px, 764px and 1080px boundaries. Development intentionally uses the
normal Next CSS pipeline.
