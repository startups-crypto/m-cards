import clsx from "clsx";
import Link from "next/link";
import { FooterLogo } from "../Logo";
import styles from "./Footer.module.scss";
import Socials from "../socials/Socials";
import LaunchButton from "../launchButton/LaunchButton";
import { INSTAGRAM_URL, SUPPORT_URL, TELEGRAM_URL, TG_BOT_URL } from "@/app/utils/constants";

export default function Footer() {
    
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerHeader}>
                    <Link href="/" aria-label="На главную MCard" className={clsx("svg", styles.footerLogo)}>
                        <FooterLogo />
                    </Link>
                    <Socials style={styles.footerSocials} />
                </div>
                <div className={styles.footerMiddle}>
                    <div className={styles.footerTitle}>
                        <h2>Трать так,  будто никто не<br></br> смотрит</h2>
                        <LaunchButton text="Открыть MCard" labelPosition="top-left" href={TG_BOT_URL} target="_blank"/>
                    </div>
                    <div className={styles.footerMenuWrapper}>
                        <div className={styles.footerMenuColumn}>
                            <p>О нас</p>
                            <nav>
                                <ul>
                                    <li><Link href="/#card-works">Где работает карта</Link></li>
                                    <li><Link href="/#partner-program">Партнёрская программа</Link></li>
                                    <li><a href={SUPPORT_URL} target="_blank" rel="nonoopener nofollow">Поддержка</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.footerMenuColumn}>
                            <p>Узнать больше</p>
                            <nav>
                                <ul>
                                    <li><Link href="/#how-it-work">Как это работает</Link></li>
                                    <li><Link href="/#faqs">FAQs</Link></li>
                                    <li><Link href="/#fees">Комиссии</Link></li>
                                    <li><Link href="/#security">Безопасность</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.footerMenuColumn}>
                            <p>Следите за нами</p>
                            <nav>
                                <ul>
                                    <li><a aria-label="MCard в Instagram" href={INSTAGRAM_URL} target="_blank" rel="nonoopener nofollow">Instagram</a></li>
                                    <li><a aria-label="MCard в Telegram" href={TELEGRAM_URL} target="_blank" rel="nonoopener nofollow">Telegram</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={styles.footerFooter}>
                    <nav className={styles.terms}>
                        <ul>
                            <li><Link href="/terms-of-use">Terms of Use</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </nav>
                    <p className={styles.copy}>© {year} MCards. All rights reserved.</p>
                </div>    
            </div>    
        </footer>
    );
}
