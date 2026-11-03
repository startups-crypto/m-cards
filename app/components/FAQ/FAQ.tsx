'use client'
import clsx from "clsx";
import { useState } from "react";
import styles from "./FAQ.module.scss";

type FAQItem = {
  q: string;
  a: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

export default function FAQ({ faqs }: FAQProps) {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleFAQ = (index: number) => {
    setOpenItems((prev) =>
        prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index]
        );
    };

    return (
        <div className={styles.faqWrapper}>
            <div className="">
                {faqs.map((item, index) => { 
                    const isOpen = openItems.includes(index);

                    return (
                        <div key={index} className={clsx(styles.sAccordionItem, {[styles.active]: isOpen})}>
                            <button className={styles.sAccordionItemHead} onClick={() => toggleFAQ(index)} aria-expanded={isOpen}>
                                <p>{item.q}</p>
                                <div className={clsx("svg", styles.openClose)}>
                                    <svg aria-hidden="true" focusable="false" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sAccordionOpen}>
                                        <g clipPath="url(#clip0_134_1094)">
                                        <path d="M35 0L40.4665 5.75655L47.6435 2.36347L50.6614 9.70604L58.5793 9.13469L58.741 17.0716L66.3307 19.3992L63.6143 26.8585L69.8507 31.7706L64.6231 37.745L68.6639 44.5782L61.6311 48.2607L62.9306 56.0922L55.0424 56.9855L53.4251 64.7576L45.7469 62.741L41.4312 69.4041L35 64.75L28.5688 69.4041L24.2531 62.741L16.5749 64.7576L14.9576 56.9855L7.0694 56.0922L8.36889 48.2607L1.3361 44.5782L5.37691 37.745L0.149303 31.7706L6.38569 26.8585L3.66928 19.3992L11.259 17.0716L11.4207 9.13469L19.3386 9.70604L22.3565 2.36347L29.5335 5.75655L35 0Z" fill="#00B4FF"/>
                                        <path d="M44.3346 34.667V35.3336C44.3346 35.7018 44.0362 36.0003 43.668 36.0003H36.0013V43.667C36.0013 44.0351 35.7028 44.3336 35.3346 44.3336H34.668C34.2998 44.3336 34.0013 44.0351 34.0013 43.667V36.0003H26.3346C25.9664 36.0003 25.668 35.7018 25.668 35.3336V34.667C25.668 34.2988 25.9664 34.0003 26.3346 34.0003H34.0013V26.3337C34.0013 25.9655 34.2998 25.667 34.668 25.667H35.3346C35.7028 25.667 36.0013 25.9655 36.0013 26.3337V34.0003H43.668C44.0362 34.0003 44.3346 34.2988 44.3346 34.667Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_134_1094">
                                        <rect width="70" height="70" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>

                                    <svg aria-hidden="true" focusable="false" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_134_1085)">
                                        <path d="M35 0L40.4665 5.75655L47.6435 2.36347L50.6614 9.70604L58.5793 9.13469L58.741 17.0716L66.3307 19.3992L63.6143 26.8585L69.8507 31.7706L64.6231 37.745L68.6639 44.5782L61.6311 48.2607L62.9306 56.0922L55.0424 56.9855L53.4251 64.7576L45.7469 62.741L41.4312 69.4041L35 64.75L28.5688 69.4041L24.2531 62.741L16.5749 64.7576L14.9576 56.9855L7.0694 56.0922L8.36889 48.2607L1.3361 44.5782L5.37691 37.745L0.149303 31.7706L6.38569 26.8585L3.66928 19.3992L11.259 17.0716L11.4207 9.13469L19.3386 9.70604L22.3565 2.36347L29.5335 5.75655L35 0Z" fill="#1E1E1E"/>
                                        <mask id="mask0_134_1085" mask-type="alpha" maskUnits="userSpaceOnUse" x="19" y="19" width="32" height="32">
                                        <rect x="19" y="19" width="32" height="32" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_134_1085)">
                                        <path d="M27 36.3337V33.667H43V36.3337H27Z" fill="#00B4FF"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_134_1085">
                                        <rect width="70" height="70" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </button>
                            <div className={clsx(styles.sAccordionItemContent, {[styles.open]: isOpen})}>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}