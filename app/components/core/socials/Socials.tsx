import clsx from "clsx";
import { InstagramIcon, TelegramIcon } from "./Icons";
import styles from "./Socials.module.scss";
import { INSTAGRAM_URL, TELEGRAM_URL } from "@/app/utils/constants";

type SocialsType = {
    style?: string;
    color?: string;
};

export default function Socials({style = "", color = ''}:SocialsType) {
    return (
       <div className={clsx(styles.socials, style)}>
            <a aria-label="MCard в Instagram" href={INSTAGRAM_URL} className="svg" target="_blank" rel="noreferrer noopener">
                <InstagramIcon classnameHoverPath={styles.hoverPath} classnameHoverRect={styles.hoverRect} />
            </a>
            <a aria-label="MCard в Telegram" href={TELEGRAM_URL} className="svg" target="_blank" rel="noreferrer noopener">
                <TelegramIcon classnameHoverPath={styles.hoverPath} classnameHoverRect={styles.hoverRect} />
            </a>
        </div>
    );
}