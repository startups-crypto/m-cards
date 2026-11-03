import clsx from 'clsx';
import styles from './Information.module.scss';
import SectionLabel from '../sectionLabel/SectionLabel';
import FAQ from '../FAQ/FAQ';
import LaunchButton from '../core/launchButton/LaunchButton';
import { SUPPORT_URL } from '@/app/utils/constants';

export default function Information () {

    const faqList = [
        {
            q: "Сколько стоит выпуск карты?",
            a: "$35 + первый депозит $25"
        },
        {
            q: "Что делать, если платёж не прошёл?",
            a: "Напишите нам в поддержку https://t.me/MCardPay_Support с деталями транзакции и мы поможем как можно скорее"
        },
        {
            q: "Есть ли лимиты?",
            a: "Для каждой карты свои лимиты, ознакомьтесь с точными лимитами на странице открытия карты"
        },
        {
            q: "Как быстро конвертируется крипта?",
            a: "В течении пары минут"
        },
        {
            q: "Можно ли выпустить несколько карт?",
            a: "Да, вы можете выпустить несколько карт на свой аккаунт"
        },
        {
            q: "Можно ли пополнить карту фиатом?",
            a: "Да, наши карты можно пополнить при помощи СБП"
        }
    ];

    return (
        <section className={clsx("section-v-gap-40-112", styles.information)} id="faqs">
            <div className={clsx(styles.informationWrapper, "m-container-80")}>
                <div className={styles.mobileHeading}>
                    <SectionLabel text='Faqs' color='white' style={styles.sectionLabelInfo}/>
                    <h2 className="t-center">Всё, что вы<br></br> хотели узнать</h2>
                </div>
                <div className={styles.faqPart}>
                    <FAQ faqs={faqList} />
                </div>
                <div className={styles.haveQuestion}>
                    <div className={styles.haveQuestionTextPart}>
                        <h2>Всё, что вы<br></br> хотели узнать</h2>
                        <SectionLabel text='Faqs'  color='white' align="left" decorPos='top' style={styles.haveQuestionLabel}/>    
                    </div>
                    <div className={styles.noAnswer}>
                        <div className={clsx("svg",styles.noAnswerIcon)}>
                            <svg aria-hidden="true" focusable="false" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_165_24257" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                                <path d="M60 0H0V60H60V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_165_24257)">
                                <path d="M42.5 6.07422H17.5C10 6.07422 5 11.0742 5 18.5742V33.5742C5 41.0742 10 46.0742 17.5 46.0742V51.3992C17.5 53.3992 19.725 54.5992 21.375 53.4742L32.5 46.0742H42.5C50 46.0742 55 41.0742 55 33.5742V18.5742C55 11.0742 50 6.07422 42.5 6.07422ZM30 36.4992C28.95 36.4992 28.125 35.6492 28.125 34.6242C28.125 33.5992 28.95 32.7492 30 32.7492C31.05 32.7492 31.875 33.5992 31.875 34.6242C31.875 35.6492 31.05 36.4992 30 36.4992ZM33.15 26.1242C32.175 26.7742 31.875 27.1992 31.875 27.8992V28.4242C31.875 29.4492 31.025 30.2992 30 30.2992C28.975 30.2992 28.125 29.4492 28.125 28.4242V27.8992C28.125 24.9992 30.25 23.5742 31.05 23.0242C31.975 22.3992 32.275 21.9742 32.275 21.3242C32.275 20.0742 31.25 19.0492 30 19.0492C28.75 19.0492 27.725 20.0742 27.725 21.3242C27.725 22.3492 26.875 23.1992 25.85 23.1992C24.825 23.1992 23.975 22.3492 23.975 21.3242C23.975 17.9992 26.675 15.2992 30 15.2992C33.325 15.2992 36.025 17.9992 36.025 21.3242C36.025 24.1742 33.925 25.5992 33.15 26.1242Z" fill="#00B4FF"/>
                                </g>
                            </svg>
                        </div>
                        <p className={styles.noAnswerTitle}>Не нашли ответ?</p>
                        <p className={styles.noAnswerText}>Мы на связи — пишите в любое время</p>
                        <LaunchButton text="чат с поддержкой" styles={styles.noAnswerButton} typeButton="full" href={SUPPORT_URL} target="_blank"/>
                    </div>
                </div>
            </div>
        </section>
    );
}