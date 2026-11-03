'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './Security.module.scss';
import SectionLabel from '../sectionLabel/SectionLabel';
import LaunchButton from '../core/launchButton/LaunchButton';
import { SUPPORT_URL } from '@/app/utils/constants';

const DESKTOP_SECURITY_WIDTH = 1080;
const DEFAULT_MARGIN = 32;

export default function Security () {
    
    const containerRef = useRef<HTMLDivElement>(null);
    const textPartRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [textPartState, setTextPartState] = useState<'default' | 'fixed' | 'bottom'>('default');
    const [marginState, setMarginState] = useState(DEFAULT_MARGIN);
    const [hiddenCards, setHiddenCards] = useState<boolean[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        const textPart = textPartRef.current;
        const inner = innerRef.current;

        if (!container || !textPart || !inner) {
            return;
        }

        let rafId = 0;

        const resetHiddenCards = () => {
            setHiddenCards((prevCards) => {
                return prevCards.some(Boolean) ? prevCards.map(() => false) : prevCards;
            });
        };

        const updateHiddenCards = () => {
            const cards = container.querySelectorAll<HTMLElement>(`.${styles.securityCard}`);
            const nextHiddenCards = Array.from(cards, (card) => card.getBoundingClientRect().top <= 0);

            setHiddenCards((prevCards) => {
                const hasChanges = prevCards.length !== nextHiddenCards.length || prevCards.some((value, index) => value !== nextHiddenCards[index]);
                return hasChanges ? nextHiddenCards : prevCards;
            });
        };

        const updateTextPartState = () => {
            rafId = 0;

            if (window.innerWidth < DESKTOP_SECURITY_WIDTH) {
                setTextPartState('default');
                resetHiddenCards();
                return;
            }

            const containerTop = window.scrollY + container.getBoundingClientRect().top;
            const containerHeight = container.offsetHeight;
            const textPartHeight = textPart.offsetHeight;
            const scrollTop = window.scrollY;
            const stickyEnd = containerTop + containerHeight - textPartHeight;

            if (scrollTop < containerTop) {
                setTextPartState('default');
                setMarginState(DEFAULT_MARGIN);
                resetHiddenCards();
                return;
            }

            if (scrollTop >= stickyEnd) {
                setTextPartState('bottom');
                setMarginState(inner.offsetHeight + DEFAULT_MARGIN);
                updateHiddenCards();
                return;
            }

            setTextPartState('fixed');
            setMarginState(inner.offsetHeight + DEFAULT_MARGIN);
            updateHiddenCards();
        };

        const handleViewportChange = () => {
            if (rafId) {
                return;
            }

            rafId = window.requestAnimationFrame(updateTextPartState);
        };


        updateTextPartState();

        window.addEventListener('scroll', handleViewportChange, { passive: true });
        window.addEventListener('resize', handleViewportChange);

        return () => {
            window.removeEventListener('scroll', handleViewportChange);
            window.removeEventListener('resize', handleViewportChange);

            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <section className={styles.security} id="security">
            <div ref={containerRef} className={clsx("m-container-80","section-v-gap-80")}>
                <div
                    ref={textPartRef}
                    className={clsx(
                        styles.textPartNormal,
                        textPartState === 'fixed' && styles.textPart,
                        textPartState === 'bottom' && styles.textPartBottom
                    )}
                >
                    <div ref={innerRef}>
                        <SectionLabel text="ВСЁ ПОД КОНТРОЛЕМ" color='white'/>
                        <h2 className='t-center'>Безопасность это наша забота, траты — ваша</h2>
                        <LaunchButton text="Связаться с поддержкой" color='white' qrColor="white-transparent" styles={styles.textPartButton} href={SUPPORT_URL} target='_blank'/>
                    </div>
                </div>
                <div className={styles.securityCards} style={{marginTop: marginState + "px"}}>
                    <div className={clsx(styles.securityCard, hiddenCards[0] && styles["securityCard--hide"])}>
                        <div className={clsx("svg", styles.icon)}>
                            <svg aria-hidden="true" focusable="false" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_115_2714)">
                                <mask id="mask0_115_2714" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                                <path d="M50 0H0V50H50V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_115_2714)">
                                <path d="M39.0625 16.667V21.042C38.1458 20.917 37.1042 20.8545 35.9375 20.8337V16.667C35.9375 10.1045 34.0833 5.72949 25 5.72949C15.9167 5.72949 14.0625 10.1045 14.0625 16.667V20.8337C12.8958 20.8545 11.8542 20.917 10.9375 21.042V16.667C10.9375 10.6253 12.3958 2.60449 25 2.60449C37.6042 2.60449 39.0625 10.6253 39.0625 16.667Z" fill="#FF733F"/>
                                <path d="M39.0618 21.0423C38.1452 20.9173 37.1035 20.8548 35.9368 20.834H14.0618C12.8952 20.8548 11.8535 20.9173 10.9368 21.0423C5.62435 21.6882 4.16602 24.2923 4.16602 31.2507V35.4173C4.16602 43.7507 6.24935 45.834 14.5827 45.834H35.416C43.7493 45.834 45.8327 43.7507 45.8327 35.4173V31.2507C45.8327 24.2923 44.3743 21.6882 39.0618 21.0423ZM18.1452 34.8131C17.7493 35.1881 17.2077 35.4173 16.666 35.4173C16.3952 35.4173 16.1243 35.3548 15.8743 35.2507C15.6035 35.1465 15.3952 35.0006 15.1868 34.8131C14.8118 34.4173 14.5827 33.8757 14.5827 33.334C14.5827 33.0632 14.6452 32.7923 14.7493 32.5423C14.8535 32.2923 14.9993 32.0632 15.1868 31.8548C15.3952 31.6673 15.6035 31.5215 15.8743 31.4173C16.6452 31.084 17.5618 31.2715 18.1452 31.8548C18.3327 32.0632 18.4785 32.2923 18.5827 32.5423C18.6868 32.7923 18.7493 33.0632 18.7493 33.334C18.7493 33.8757 18.5202 34.4173 18.1452 34.8131ZM26.916 34.1256C26.8118 34.3756 26.666 34.6048 26.4785 34.8131C26.0827 35.1881 25.541 35.4173 24.9993 35.4173C24.4368 35.4173 23.916 35.1881 23.5202 34.8131C23.3327 34.6048 23.1868 34.3756 23.0827 34.1256C22.9785 33.8756 22.916 33.6048 22.916 33.334C22.916 32.7715 23.1452 32.2507 23.5202 31.8548C24.291 31.084 25.6868 31.084 26.4785 31.8548C26.8535 32.2507 27.0827 32.7715 27.0827 33.334C27.0827 33.6048 27.0202 33.8756 26.916 34.1256ZM34.8118 34.8131C34.416 35.1881 33.8743 35.4173 33.3327 35.4173C32.791 35.4173 32.2493 35.1881 31.8535 34.8131C31.4785 34.4173 31.2493 33.8965 31.2493 33.334C31.2493 32.7715 31.4785 32.2507 31.8535 31.8548C32.6452 31.084 34.041 31.084 34.8118 31.8548C34.8952 31.959 34.9785 32.0632 35.0618 32.1882C35.1452 32.2923 35.2077 32.4173 35.2493 32.5423C35.3118 32.6673 35.3535 32.7923 35.3743 32.9173C35.3952 33.0632 35.416 33.209 35.416 33.334C35.416 33.8757 35.1868 34.4173 34.8118 34.8131Z" fill="#FF733F"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_115_2714">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3>Зашифрованные платежи</h3>
                        <p>Транзакции защищены современным шифрованием, поэтому ваши средства в безопасности, пока вы занимаетесь своими делами.</p>
                    </div>

                    <div className={clsx(styles.securityCard, hiddenCards[1] && styles["securityCard--hide"])}>
                        <div className={clsx("svg", styles.icon)}>
                            <svg aria-hidden="true" focusable="false" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_115_2721)">
                                <mask id="mask0_115_2721" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                                <path d="M50 0H0V50H50V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_115_2721)">
                                <path d="M40.6243 16.6667C43.5008 16.6667 45.8327 14.3348 45.8327 11.4583C45.8327 8.58185 43.5008 6.25 40.6243 6.25C37.7479 6.25 35.416 8.58185 35.416 11.4583C35.416 14.3348 37.7479 16.6667 40.6243 16.6667Z" fill="#E6ACFA"/>
                                <path d="M40.6243 16.6667C43.5008 16.6667 45.8327 14.3348 45.8327 11.4583C45.8327 8.58185 43.5008 6.25 40.6243 6.25C37.7479 6.25 35.416 8.58185 35.416 11.4583C35.416 14.3348 37.7479 16.6667 40.6243 16.6667Z" fill="#E6ACFA"/>
                                <path d="M43.166 19.3962C41.7077 19.8545 40.1035 19.9378 38.4368 19.5212C35.6452 18.792 33.3743 16.5628 32.6035 13.7712C32.2285 12.417 32.2077 11.0837 32.4368 9.87532C32.7077 8.54199 31.7702 7.29199 30.4368 7.29199H14.5827C8.33268 7.29199 4.16602 10.417 4.16602 17.7087V32.292C4.16602 39.5837 8.33268 42.7087 14.5827 42.7087H35.416C41.666 42.7087 45.8327 39.5837 45.8327 32.292V21.3753C45.8327 20.0003 44.4993 18.9587 43.166 19.3962ZM32.3327 23.2295L29.8743 25.1878C28.4993 26.292 26.7493 26.8337 24.9993 26.8337C23.2493 26.8337 21.4785 26.292 20.1243 25.1878L13.6035 19.9795C12.9368 19.4378 12.8327 18.4378 13.3535 17.7712C13.8952 17.1045 14.8743 16.9795 15.541 17.5212L22.0618 22.7295C23.6452 24.0003 26.3327 24.0003 27.916 22.7295L30.3743 20.7712C31.041 20.2295 32.041 20.3337 32.5618 21.0212C33.1035 21.6878 32.9993 22.6878 32.3327 23.2295Z" fill="#E6ACFA"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_115_2721">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3>Мгновенные уведомления о транзакциях</h3>
                        <p>Каждый платёж, который вы совершаете — вы узнаете о нём сразу</p>
                    </div>

                    <div className={clsx(styles.securityCard, hiddenCards[2] && styles["securityCard--hide"])}>
                        <div className={clsx("svg", styles.icon)}>
                            <svg aria-hidden="true" focusable="false" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_115_2729)">
                                <mask id="mask0_115_2729" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                                <path d="M50 0H0V50H50V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_115_2729)">
                                <path d="M23.4375 37.9585V12.041C23.4375 11.1781 24.1371 10.4785 25 10.4785C25.8629 10.4785 26.5625 11.1781 26.5625 12.041V37.9585C26.5621 38.821 25.8627 39.521 25 39.521C24.1373 39.521 23.4379 38.821 23.4375 37.9585Z" fill="#00B4FF"/>
                                <path d="M31.2787 3.09413C31.8703 2.46604 32.8599 2.43742 33.488 3.02902C34.1162 3.62067 34.1468 4.61031 33.5551 5.23848L26.1374 13.112C25.5458 13.7402 24.5562 13.7708 23.928 13.1792C23.3001 12.5875 23.2714 11.5978 23.8628 10.9697L31.2787 3.09413Z" fill="#00B4FF"/>
                                <path d="M16.5119 3.02881C17.1399 2.43735 18.1297 2.46627 18.7214 3.09391L26.1391 10.9695C26.7306 11.5977 26.7002 12.5874 26.072 13.179C25.4437 13.7704 24.4541 13.74 23.8625 13.1118L16.4468 5.23829C15.8553 4.61027 15.8842 3.62052 16.5119 3.02881Z" fill="#00B4FF"/>
                                <path d="M23.8627 36.886C24.4543 36.2581 25.4439 36.2294 26.0723 36.821C26.7002 37.4127 26.7308 38.4023 26.1393 39.0304L18.7215 46.9039C18.1298 47.5323 17.1402 47.5627 16.512 46.9712C15.8841 46.3796 15.8554 45.3898 16.4469 44.7617L23.8627 36.886Z" fill="#00B4FF"/>
                                <path d="M23.928 36.8208C24.5559 36.2293 25.5457 36.2583 26.1373 36.886L33.5553 44.7614C34.1465 45.3897 34.1161 46.3793 33.4882 46.971C32.8598 47.5624 31.8703 47.532 31.2786 46.9039L23.8628 39.0304C23.2713 38.4022 23.3003 37.4124 23.928 36.8208Z" fill="#00B4FF"/>
                                <path d="M13.0187 17.7086C13.4673 16.9715 14.428 16.7374 15.1651 17.1857L25.8118 23.6656L25.832 23.6779L30.2103 26.4366L36.442 30.1354C37.184 30.5756 37.4293 31.5335 36.9893 32.2756C36.5488 33.0179 35.589 33.2633 34.847 32.8229L28.597 29.1141C28.5851 29.107 28.574 29.0989 28.5624 29.0916L24.1861 26.3329L13.5416 19.855C12.8046 19.4064 12.5704 18.4457 13.0187 17.7086Z" fill="#00B4FF"/>
                                <path d="M11.191 6.36305C12.0259 6.14618 12.878 6.64714 13.0953 7.48203L15.8663 18.1266C16.0837 18.9617 15.5825 19.8155 14.7473 20.0329C13.9125 20.2497 13.0603 19.7488 12.843 18.9139L10.072 8.26735C9.85516 7.43245 10.3561 6.58034 11.191 6.36305Z" fill="#00B4FF"/>
                                <path d="M13.9439 17.0131C14.7761 16.7869 15.6335 17.2778 15.8604 18.1097C16.0868 18.9423 15.5963 19.8017 14.7638 20.0282L4.57701 22.7992C3.7443 23.0257 2.88495 22.5334 2.65847 21.7007C2.43266 20.8684 2.92322 20.0109 3.75507 19.7841L13.9439 17.0131Z" fill="#00B4FF"/>
                                <path d="M35.2535 29.9675C36.0885 29.7507 36.9406 30.2517 37.1579 31.0865L39.9289 41.7311C40.1462 42.5661 39.6449 43.42 38.8099 43.6373C37.9749 43.8542 37.1229 43.3534 36.9056 42.5184L34.1345 31.8719C33.9177 31.0369 34.4187 30.1848 35.2535 29.9675Z" fill="#00B4FF"/>
                                <path d="M45.4244 27.2006C46.2566 26.9744 47.1139 27.4652 47.3408 28.2971C47.5673 29.1298 47.0769 29.9892 46.2444 30.2156L36.0575 32.9867C35.2248 33.2131 34.3654 32.7208 34.1389 31.8881C33.9131 31.056 34.4037 30.1983 35.2356 29.9717L45.4244 27.2006Z" fill="#00B4FF"/>
                                <path d="M34.8344 17.1859C35.5715 16.7372 36.5321 16.9716 36.9806 17.7088C37.4292 18.4456 37.1965 19.4064 36.4598 19.8551L25.8133 26.3351L25.8113 26.333L21.4392 29.0917C21.4273 29.0992 21.4144 29.1071 21.4025 29.1142L15.1525 32.823C14.4104 33.2634 13.4525 33.0178 13.0122 32.2759C12.5719 31.5338 12.8155 30.5759 13.5574 30.1355L19.7871 26.4367L24.1673 23.678L24.1877 23.6657L34.8344 17.1859Z" fill="#00B4FF"/>
                                <path d="M36.9057 7.48207C37.123 6.64715 37.9751 6.14611 38.8099 6.36309C39.6449 6.5804 40.1457 7.43253 39.9291 8.2674L37.158 18.914C36.9407 19.7488 36.0884 20.2497 35.2536 20.0329C34.4186 19.8156 33.9174 18.9617 34.1347 18.1266L36.9057 7.48207Z" fill="#00B4FF"/>
                                <path d="M34.1391 18.1098C34.366 17.2776 35.2253 16.7868 36.0576 17.0132L46.2445 19.7842C47.0768 20.0107 47.567 20.8682 47.3412 21.7007C47.1147 22.5332 46.2572 23.0255 45.4245 22.7993L35.2358 20.0283C34.4037 19.8015 33.9128 18.9422 34.1391 18.1098Z" fill="#00B4FF"/>
                                <path d="M12.8432 31.0865C13.0605 30.2517 13.9126 29.7507 14.7475 29.9675C15.5824 30.1848 16.0833 31.0369 15.8665 31.8719L13.0955 42.5184C12.8782 43.3532 12.026 43.8542 11.1912 43.6373C10.3561 43.42 9.85484 42.5663 10.0722 41.7311L12.8432 31.0865Z" fill="#00B4FF"/>
                                <path d="M2.65869 28.2972C2.88554 27.4651 3.74484 26.9743 4.57723 27.2007L14.764 29.9715C15.5963 30.1982 16.0866 31.0557 15.8606 31.8882C15.6342 32.7207 14.7767 33.213 13.9441 32.9868L3.75529 30.2157C2.92313 29.9888 2.43229 29.1297 2.65869 28.2972Z" fill="#00B4FF"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_115_2729">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3>Заморозьте карту в любой момент</h3>
                        <p>Потеряли карту или заметили что-то необычное? Мгновенно приостановите её в Telegram</p>
                    </div>

                    <div className={clsx(styles.securityCard, hiddenCards[3] && styles["securityCard--hide"])}>
                        <div className={clsx("svg", styles.icon)}>
                            <svg aria-hidden="true" focusable="false" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_115_2749)">
                                <mask id="mask0_115_2749" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                                <path d="M50 0H0V50H50V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_115_2749)">
                                <path d="M26.5625 30.2513H27.0417C27.7292 30.2513 28.3125 29.6263 28.3125 28.8555C28.3125 27.8763 28.0833 27.7513 27.4167 27.5221L26.5625 27.2305V30.2513Z" fill="#FF733F"/>
                                <path d="M24.9993 4.16699C13.4993 4.16699 4.16602 13.5003 4.16602 25.0003C4.16602 36.5003 13.4993 45.8337 24.9993 45.8337C36.4993 45.8337 45.8327 36.5003 45.8327 25.0003C45.8327 13.5003 36.4993 4.16699 24.9993 4.16699ZM15.791 34.2087C16.3952 34.8128 16.3952 35.8128 15.791 36.417C15.4785 36.7295 15.0827 36.8753 14.6868 36.8753C14.291 36.8753 13.8952 36.7295 13.5827 36.417C10.541 33.3753 8.85352 29.3128 8.85352 25.0003C8.85352 20.6878 10.541 16.6253 13.5827 13.5837C14.1868 12.9795 15.1868 12.9795 15.791 13.5837C16.3952 14.1878 16.3952 15.1878 15.791 15.792C13.3327 18.2503 11.9785 21.5212 11.9785 25.0003C11.9785 28.4795 13.3327 31.7503 15.791 34.2087ZM28.4368 24.542C30.4368 25.2503 31.416 26.6462 31.416 28.8337C31.416 31.3337 29.4577 33.3545 27.0202 33.3545H26.541V33.7295C26.541 34.5837 25.8327 35.292 24.9785 35.292C24.1243 35.292 23.416 34.5837 23.416 33.7295V33.3545H23.3535C20.7077 33.3545 18.541 31.1253 18.541 28.3962C18.541 27.542 19.2493 26.8337 20.1035 26.8337C20.9577 26.8337 21.666 27.542 21.666 28.3962C21.666 29.417 22.416 30.2295 23.3535 30.2295H23.416V26.1045L21.541 25.4378C19.541 24.7295 18.5618 23.3337 18.5618 21.1462C18.5618 18.6462 20.5202 16.6253 22.9577 16.6253H23.4368V16.2503C23.4368 15.3962 24.1452 14.6878 24.9993 14.6878C25.8535 14.6878 26.5618 15.3962 26.5618 16.2503V16.6253H26.6243C29.2702 16.6253 31.4368 18.8545 31.4368 21.5837C31.4368 22.4378 30.7285 23.1462 29.8743 23.1462C29.0202 23.1462 28.3118 22.4378 28.3118 21.5837C28.3118 20.5628 27.5618 19.7503 26.6243 19.7503H26.5618V23.8753L28.4368 24.542ZM36.416 36.417C36.1035 36.7295 35.7077 36.8753 35.3118 36.8753C34.916 36.8753 34.5202 36.7295 34.2077 36.417C33.6035 35.8128 33.6035 34.8128 34.2077 34.2087C36.666 31.7503 38.0202 28.4795 38.0202 25.0003C38.0202 21.5212 36.666 18.2503 34.2077 15.792C33.6035 15.1878 33.6035 14.1878 34.2077 13.5837C34.8118 12.9795 35.8118 12.9795 36.416 13.5837C39.4577 16.6253 41.1452 20.6878 41.1452 25.0003C41.1452 29.3128 39.4577 33.3753 36.416 36.417Z" fill="#FF733F"/>
                                <path d="M21.707 21.1677C21.707 22.1469 21.9362 22.2719 22.6029 22.501L23.457 22.7927V19.751H22.9779C22.2695 19.751 21.707 20.3968 21.707 21.1677Z" fill="#FF733F"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_115_2749">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3>Вы контролируете свой баланс</h3>
                        <p>Пополняйте счёт, тратьте деньги или оставляйте их нетронутыми — всё в ваших руках</p>
                    </div>

                    <div className={clsx(styles.securityCard, hiddenCards[4] && styles["securityCard--hide"])}>
                        <div className={clsx("svg", styles.icon)}>
                            <svg aria-hidden="true" focusable="false" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_115_2757)">
                                <mask id="mask0_115_2757" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                                <path d="M50 0H0V50H50V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_115_2757)">
                                <path d="M35.416 5.06152H14.5827C8.33268 5.06152 4.16602 9.22819 4.16602 15.4782V27.9782C4.16602 34.2282 8.33268 38.3949 14.5827 38.3949V42.8324C14.5827 44.499 16.4368 45.499 17.8118 44.5615L27.0827 38.3949H35.416C41.666 38.3949 45.8327 34.2282 45.8327 27.9782V15.4782C45.8327 9.22819 41.666 5.06152 35.416 5.06152ZM24.9993 30.4157C24.1243 30.4157 23.4368 29.7074 23.4368 28.8532C23.4368 27.999 24.1243 27.2907 24.9993 27.2907C25.8743 27.2907 26.5618 27.999 26.5618 28.8532C26.5618 29.7074 25.8743 30.4157 24.9993 30.4157ZM27.6243 21.7699C26.8118 22.3115 26.5618 22.6657 26.5618 23.249V23.6865C26.5618 24.5407 25.8535 25.249 24.9993 25.249C24.1452 25.249 23.4368 24.5407 23.4368 23.6865V23.249C23.4368 20.8324 25.2077 19.6449 25.8743 19.1865C26.6452 18.6657 26.8952 18.3115 26.8952 17.7699C26.8952 16.7282 26.041 15.874 24.9993 15.874C23.9577 15.874 23.1035 16.7282 23.1035 17.7699C23.1035 18.624 22.3952 19.3324 21.541 19.3324C20.6868 19.3324 19.9785 18.624 19.9785 17.7699C19.9785 14.999 22.2285 12.749 24.9993 12.749C27.7702 12.749 30.0202 14.999 30.0202 17.7699C30.0202 20.1449 28.2702 21.3324 27.6243 21.7699Z" fill="#E6ACFA"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_115_2757">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3>Поддержка 24/7</h3>
                        <p>Нужна помощь? Мы на связи</p>
                    </div>

                </div>
                <LaunchButton text="Связаться с поддержкой" typeButton="full" color="white" styles={styles.bottomField} href={SUPPORT_URL} target='_blank'/>    
            </div>
        </section>
    );
}
