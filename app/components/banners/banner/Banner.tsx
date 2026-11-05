import clsx from 'clsx';
import styles from './Banner.module.scss';
import Image from "next/image";
import { BaseImage } from '@/app/config/types';
import { GetHelp, OwnIt, Spend, TopUp } from '../wordsSVG';

import type { CSSProperties } from 'react';
import LaunchButton from '../../core/launchButton/LaunchButton';
import { TG_BOT_URL } from '@/app/utils/constants';

type BannerType = {
    index: number;
    progress?: number;
    title: string;
    text: string;
    color: string;
    textColor?: 'black' | 'white';
    image: BaseImage;
    imageMob: BaseImage;
    imageMobPos?: number;
    imagePos?: "center" | "bottom"
    wordType: "topUp" | "spend" | "ownIt" | "getHelp";
    wordColor: string;
};

const wordsComponent = {
    topUp: TopUp,
    spend: Spend,
    ownIt: OwnIt,
    getHelp: GetHelp
};

const FIRST_BANNER_IMAGE_SIZES = [
    '(min-width: 1440px) min(920px, calc(50vw - 40px))',
    '(min-width: 1080px) calc(50vw - 20px)',
    '(min-width: 764px) 50vw',
    '100vw',
].join(', ');

export default function Banner ({index,progress = 0,title,text,color,textColor = 'black',image,imageMob,imageMobPos = 0,imagePos = "center", wordType, wordColor}:BannerType) {
    const WordComponent = wordsComponent[wordType];
    const rotateEnd = index % 2 === 0 ? 10 : -10;
    const translateKoef = progress > 0.9 ? 200 : 100;
    const progresStart = progress > 0.1 ? true : false;
    const imageSizes = index === 0 ? FIRST_BANNER_IMAGE_SIZES : undefined;

    const bannerStyle: CSSProperties = {
        backgroundColor: color,
        ['--banner-progress' as string]: progress,
        ['--banner-rotate-end' as string]: index % 2 === 0 ? -10 : 10,
        transform: "rotate(" + progress * rotateEnd * 1 + "deg) scale(" + (1 - progress / 2) + ") translateY(" + progress * translateKoef + "px)",
    };

    return (
        <div className={clsx(styles.banner, progresStart ? styles.bannerRound : "")} style={bannerStyle} data-header-color-class="header--white-transparent">
            <div className={styles.bannerHeading}>
                <WordComponent color={wordColor} />
            </div>
            <div className={styles.bannerWrapper}>
                <div className={clsx(styles.image, imagePos == "bottom" ? styles.imageBottom : '')} style={{paddingTop: imageMobPos + "px"}}>
                    <Image src={imageMob.src} alt={imageMob.alt || "Banner image"} quality={100} width={imageMob.width} height={imageMob.height} sizes={imageSizes} />
                    <Image src={image.src} alt={image.alt || "Banner image"} quality={100} width={image.width} height={image.height} sizes={imageSizes} />
                </div>
                <div className={clsx(styles.textPart, textColor == 'white' ? styles.textPartWhite : '')}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <LaunchButton text='Открыть MCard' labelPosition='top-left' styles={styles.launch} href={TG_BOT_URL} target='_blank'/>
                </div>
            </div>
        </div>
    );
}
