'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Capabilities.module.scss';

import clsx from 'clsx';
import LaunchButton from '../core/launchButton/LaunchButton';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SUPPORT_URL } from '@/app/utils/constants';


export default function Capabilities () {
    return (
        <section className={styles.fixedSection} id="card-works">
             <picture className="responsive-image">
                <source srcSet="/images/capability-mob.avif 2x" media="(max-width: 767px)" type="image/avif" />
                <source srcSet="/images/capability-mob.webp 2x" media="(max-width: 767px)" type="image/webp" />
                <source srcSet="/images/capability-mob.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />

                <source srcSet="/images/capability.avif 1x, /images/capability@2x.avif 2x" media="(min-width: 1080px)" type="image/avif" />
                <source srcSet="/images/capability.webp 1x, /images/capability@2x.webp 2x" media="(min-width: 1080px)" type="image/webp" />
                <source srcSet="/images/capability.jpg 1x, /images/capability@2x.jpg 2x" media="(min-width: 1080px)" type="image/jpeg" />

                <source srcSet="/images/capability-tablet.avif 2x" media="(min-width: 768px) and (max-width: 1079px)" type="image/avif" />
                <source srcSet="/images/capability-tablet.webp 2x" media="(min-width: 768px) and (max-width: 1079px)" type="image/webp" />
                <source srcSet="/images/capability-tablet.jpg 2x" media="(min-width: 768px) and (max-width: 1079px)" type="image/jpeg" />

                <img src="/images/capability-mob.jpg" width="750" height="2160" alt="Section background" decoding="async" loading="lazy"/>
            </picture>
            <div className={styles.fixedSectionWrapper}>
                <h2>Подходит ли<br></br> это вам?</h2>
                <p>Мы всё объясним и поможем найти лучшее решение</p>
                <LaunchButton text='Связаться с командой' color="white-m-black-d" styles={styles.capabilitiesButton} href={SUPPORT_URL} target="_blank" />   
            </div>
           
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className={styles.swiper}
                    pagination={{ clickable: true, type: "bullets" }}
                    breakpoints={{1080: {enabled: false,allowTouchMove: false,pagination: { enabled: false }}}}
                >
                    <SwiperSlide className={styles.swiperCellItem}>
                        <div className={styles.icon}>
                            <svg aria-hidden="true" focusable="false" width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_225_9358)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0048 34.6423L20.0071 43.3042L15.0039 51.9662H25.0048L30.0025 43.3042L35.0002 34.6423L40.0034 25.9803H49.9989L45.0012 17.3184H35.0002L30.0025 25.9803L25.0048 34.6423Z" fill="#00B4FF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M45.0009 34.6426L40.0032 43.3045L35 51.9665H45.0009L49.9986 43.3045H59.9995L55.0018 34.6426H45.0009Z" fill="#00B4FF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0009 43.2987L14.9986 34.6368L20.0018 25.9748L24.9995 17.3129L29.9972 8.65093H39.9982L35.0005 0H25.0051L0 43.2987L5.00321 51.9607L10.0009 43.2987Z" fill="#00B4FF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_225_9358">
                                <rect width="60" height="51.9662" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p>Путешествую и плачу за рубежом</p>     
                    </SwiperSlide>
                    <SwiperSlide className={clsx(styles.swiperCellItem,styles.swiperCellItemWhite)}>
                        <div className={styles.icon}>
                            <svg aria-hidden="true" focusable="false" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_225_9377)">
                                <path d="M35.7499 9.70335L24.25 16.529V6.82562L35.7499 0V9.70335Z" fill="#00B4FF"/>
                                <path d="M19.7104 11.5825L16.4058 24.5407L9.54688 17.6818L12.8516 4.72363L19.7104 11.5825Z" fill="#00B4FF"/>
                                <path d="M9.70335 24.2529L16.529 35.7528H6.82562L0 24.2529H9.70335Z" fill="#00B4FF"/>
                                <path d="M11.5815 40.2881L24.5397 43.5928L17.6808 50.4517L4.72266 47.147L11.5815 40.2881Z" fill="#00B4FF"/>
                                <path d="M24.25 50.2963L35.7499 43.4707V53.1741L24.25 59.9997V50.2963Z" fill="#00B4FF"/>
                                <path d="M40.2891 48.4161L43.5937 35.458L50.4526 42.3224L47.1479 55.2806L40.2891 48.4161Z" fill="#00B4FF"/>
                                <path d="M50.2944 35.7528L43.4688 24.2529H53.1721L59.9977 35.7528H50.2944Z" fill="#00B4FF"/>
                                <path d="M48.4152 19.7114L35.457 16.4067L42.3215 9.54785L55.2796 12.8525L48.4152 19.7114Z" fill="#00B4FF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_225_9377">
                                <rect width="60" height="60" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p>Хочу тратить крипту без банка</p>     
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperCellItem}>
                        <div className={styles.icon}>
                            <svg aria-hidden="true" focusable="false" width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_225_9367)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 18.3973V10.6428C5.8695 10.6428 10.5964 5.9159 10.5964 0H18.3509C18.3509 10.1846 10.144 18.3973 0 18.3973Z" fill="#00B4FF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M41.6094 0H49.3638C49.3638 5.9159 54.1314 10.6428 60.0067 10.6428V18.3973C49.8684 18.3973 41.6152 10.1846 41.6152 0H41.6094Z" fill="#00B4FF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M30.0029 39.2663C21.8888 45.4606 11.7912 49.2189 0.782987 49.4045H0V41.65C9.35524 41.65 18.0261 38.5761 24.9512 33.3446C26.8304 31.5524 28.4833 29.5805 29.9971 27.5215C31.4703 29.5805 33.1638 31.5524 34.9966 33.3446C41.9681 38.5703 50.639 41.65 59.9942 41.65V49.3523L59.1706 49.3987C48.2088 49.2131 38.1112 45.449 29.9971 39.2605L30.0029 39.2663Z" fill="#00B4FF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M35.6462 23.5825C33.6336 21.5119 31.8821 19.1281 30.4611 16.611C30.2813 16.3326 30.1363 16.06 30.0029 15.7816C29.8695 16.06 29.6781 16.3326 29.5447 16.611C23.7622 26.929 12.667 33.9005 0 33.9005V26.146C14.407 26.146 26.1054 14.4534 26.1054 0.00585938H33.8598C33.8598 5.91596 35.8318 11.3331 39.0855 15.6888C43.8531 22.0687 51.4683 26.146 60.0058 26.146V33.9005C50.465 33.9005 41.7941 29.9508 35.6462 23.5825Z" fill="#00B4FF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_225_9367">
                                <rect width="60" height="49.4036" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p>Нужна карта для фриланса</p>     
                    </SwiperSlide>
                    <SwiperSlide className={clsx(styles.swiperCellItem,styles.swiperCellItemWhite)}>
                        <div className={styles.icon}>
                            <svg aria-hidden="true" focusable="false" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_225_9344)">
                                <path d="M30.0012 22.3988L24.2266 16.0621V5.77463C24.2266 2.58426 26.8108 0 30.0012 0C33.1916 0 35.7758 2.58426 35.7758 5.77463V16.0621L30.0012 22.3988Z" fill="#00B4FF"/>
                                <path d="M24.6241 24.625L16.0613 24.2283L8.78789 16.9549C6.53424 14.7013 6.53424 11.0425 8.78789 8.78887C11.0415 6.53522 14.7003 6.53522 16.9539 8.78887L24.2273 16.0623L24.6241 24.625Z" fill="#00B4FF"/>
                                <path d="M22.3988 30.0022L16.0621 35.7768H5.77463C2.58426 35.7768 0 33.1925 0 30.0022C0 26.8118 2.58426 24.2275 5.77463 24.2275H16.0621L22.3988 30.0022Z" fill="#00B4FF"/>
                                <path d="M24.6241 35.375L24.2273 43.9378L16.9539 51.2112C14.7003 53.4648 11.0415 53.4648 8.78789 51.2112C6.53424 48.9575 6.53424 45.2988 8.78789 43.0451L16.0613 35.7717L24.6241 35.375Z" fill="#00B4FF"/>
                                <path d="M30.0012 37.6006L35.7758 43.9373V54.2247C35.7758 57.4151 33.1916 59.9993 30.0012 59.9993C26.8108 59.9993 24.2266 57.4151 24.2266 54.2247V43.9373L30.0012 37.6006Z" fill="#00B4FF"/>
                                <path d="M35.375 35.375L43.9378 35.7717L51.2112 43.0451C53.4648 45.2988 53.4648 48.9575 51.2112 51.2112C48.9575 53.4648 45.2988 53.4648 43.0451 51.2112L35.7717 43.9378L35.375 35.375Z" fill="#00B4FF"/>
                                <path d="M37.6016 30.0022L43.9382 24.2275H54.2257C57.4161 24.2275 60.0003 26.8118 60.0003 30.0022C60.0003 33.1925 57.4161 35.7768 54.2257 35.7768H43.9382L37.6016 30.0022Z" fill="#00B4FF"/>
                                <path d="M35.375 24.625L35.7717 16.0623L43.0451 8.78887C45.2988 6.53522 48.9575 6.53522 51.2112 8.78887C53.4648 11.0425 53.4648 14.7013 51.2112 16.9549L43.9378 24.2283L35.375 24.625Z" fill="#00B4FF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_225_9344">
                                <rect width="60" height="60" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p>Оплачиваю зарубежные сервисы</p>     
                    </SwiperSlide>    
                </Swiper>
        </section>
    );
}
