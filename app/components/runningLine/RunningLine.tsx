import clsx from 'clsx';
import styles from './RunningLine.module.scss';

export default function RunningLine () {

    const logos = [
        {src: "/images/logos/airbnb.svg", alt: "логотип Airbnb", width: "161px", height: "50px"},
        {src: "/images/logos/aliexpress.svg", alt: "логотип AliExpress", width: "185px", height: "40px"},
        {src: "/images/logos/amazon.svg", alt: "логотип Amazon", width: "120px", height: "40px" },
        {src: "/images/logos/booking.svg", alt: "логотип Booking.com", width: "189px", height: "32px"},
        {src: "/images/logos/spotifiy.svg", alt: "логотип Spotify", width: "167px", height: "40px"},
        {src: "/images/logos/uber.svg", alt: "логотип Uber", width: "116px", height: "40px" },
        {src: "/images/logos/wizz.svg", alt: "логотип Wizz Air", width: "87px", height: "40px" },
        {src: "/images/logos/youtube.svg", alt: "логотип YouTube", width: "180px", height: "40px" },
        {src: "/images/logos/zara.svg", alt: "логотип Zara", width: "96px", height: "40px" },


        {src: "/images/logos/airbnb.svg", alt: "логотип Airbnb", width: "161px", height: "50px"},
        {src: "/images/logos/aliexpress.svg", alt: "логотип AliExpress", width: "185px", height: "40px"},
        {src: "/images/logos/amazon.svg", alt: "логотип Amazon", width: "120px", height: "40px" },
        {src: "/images/logos/booking.svg", alt: "логотип Booking.com", width: "189px", height: "32px"},
        {src: "/images/logos/spotifiy.svg", alt: "логотип Spotify", width: "167px", height: "40px"},
        {src: "/images/logos/uber.svg", alt: "логотип Uber", width: "116px", height: "40px" },
        {src: "/images/logos/wizz.svg", alt: "логотип Wizz Air", width: "87px", height: "40px" },
        {src: "/images/logos/youtube.svg", alt: "логотип YouTube", width: "180px", height: "40px" },
        {src: "/images/logos/zara.svg", alt: "логотип Zara", width: "96px", height: "40px" },
    ];

    return (
        <section className={styles.runningLine}>
            <h2 className={styles.runningLineTitle}>Платите везде, где<br/> принимают Mastercard</h2> 

            <div className={clsx('running-line', styles.runningLineWrapper)}>
                <div className="running-line-wrap">
                    <div className={clsx('initial-child-container', styles.runningLineInitial)}>
                        {logos.map((logo, index) => (
                            <div key={index + "logo1"} className={clsx('running-line-item', styles.runningLineItem)} style={{width: logo.width}} aria-hidden={index !== logos.findIndex(({ src }) => src === logo.src)}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    width={logo.width}
                                    height={logo.height}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="running-line-wrap" aria-hidden="true">
                    <div className={clsx('initial-child-container', styles.runningLineInitial)}>
                        {logos.map((logo, index) => (
                            <div key={index + "logo2"} className={clsx('running-line-item', styles.runningLineItem)} style={{width: logo.width}}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    // width={96} height={32}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>    
        </section>
    );
}