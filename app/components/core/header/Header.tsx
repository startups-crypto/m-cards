'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { AnimationEvent as ReactAnimationEvent } from "react";
import QrButton from "../qrButton/QrButton";
import { mainMenu } from "@/app/config/menu.main";
import MenuSection from "../menuSection/MenuSection";
import { Logo } from "../Logo";
import clsx from "clsx";
import Socials from "../socials/Socials";
import { ACTIVE_CLASS, TG_BOT_URL } from "@/app/utils/constants";

type HeaderProps = {
  color?: "black" | "white" | "black-text" | "";
};

export default function Header({ color = '' }: HeaderProps) {
  const [isActive, seActive] = useState(false);
  const [headerState, setHeaderState] = useState<"normal" | "change" | "scroll" | "">("normal");
  const [sectionColorClass, setSectionColorClass] = useState("");
  const [isHover, setIshover] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const openMenu = () => {
    seActive(true);
  };

  const closeMenu = () => {
    seActive(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-header-color-class]");

    const handleScroll = () => {
      const isScrolledBeyondThreshold = window.scrollY > 100;
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      
      let nextSectionColorClass = "";

      if(sections.length) {
        for (const section of sections) {
          const sectionColor = section.dataset.headerColorClass;

          if (!sectionColor) {
            continue;
          }

          const rect = section.getBoundingClientRect();
          const isHeaderInsideSection = rect.top < headerHeight && rect.bottom > 0;

          if (isHeaderInsideSection) {
            nextSectionColorClass = sectionColor;
            break;
          }
        }

        setSectionColorClass((previousClass) => {
          return previousClass === nextSectionColorClass ? previousClass : nextSectionColorClass;
        });
      }

      setHeaderState((previousState) => {
        if (!isScrolledBeyondThreshold) {
          return "normal";
        }

        if (previousState === "scroll") {
          return "scroll";
        }

        return "change";
      });

    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleHeaderAnimationEnd = (event: ReactAnimationEvent<HTMLElement>) => {
    if (headerState !== "change") {
      return;
    }

    if (event.animationName !== "headerChangeButton") {
      return;
    }

    setHeaderState((previousState) => {
      if (previousState !== "change") {
        return previousState;
      }

      return window.scrollY > 100 ? "scroll" : "normal";
    });
  };

  return (
    <>
      <div className={clsx("header-overlay", isHover ? ACTIVE_CLASS : "")} onMouseEnter={()=> {setIshover(false);}}></div>
      <MenuSection isActive={isActive} closeMenu={closeMenu}/>
      <header
        ref={headerRef}
        onAnimationEnd={handleHeaderAnimationEnd}
        className={clsx(
          "header",
          isHover ? "header--hover" : "",
          color === "black" && "header--black",
          color === "white" && "header--white",
          color == "black-text" && "header--black-text",
          sectionColorClass,
          headerState === "normal" && "header--normal",
          headerState === "change" && "header--change",
          headerState === "scroll" && "header--scroll"
        )}
      >
          <div className="header-wrapper">
            <div className="header-main">
                <div className="header__left_part">
                  <Link href="/" className="logo svg">
                    <svg className="logo-m" width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M36.8363 30L36.8354 29.9995L27.9062 24.8474V5.65336L36.8363 0.500854V30Z" fill="url(#paint0_linear_166_24660)"/>
                      <path d="M18.418 20.9317V10.6267L36.8357 0V10.305L18.4188 20.9312L18.418 20.9317Z" fill="url(#paint1_linear_166_24660)"/>
                      <path d="M-0.000351906 30L0.000502586 29.9995L8.92969 24.8474L8.92969 5.65337L-0.000351906 0.500862L-0.000351906 30Z" fill="url(#paint2_linear_166_24660)"/>
                      <path d="M18.418 20.9318V10.6268L0.000232697 9.91821e-05L0.000232697 10.3051L18.4171 20.9313L18.418 20.9318Z" fill="url(#paint3_linear_166_24660)"/>
                      <defs>
                      <linearGradient id="paint0_linear_166_24660" x1="32.3713" y1="0.500854" x2="32.3713" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3223FA"/>
                      <stop offset="1" stopColor="#23DBE1"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_166_24660" x1="27.6268" y1="0" x2="27.6268" y2="20.9317" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#19D6F1"/>
                      <stop offset="1" stopColor="#3433FF"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_166_24660" x1="4.46467" y1="30" x2="4.46467" y2="0.500862" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#19C8F3"/>
                      <stop offset="1" stopColor="#3433FF"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_166_24660" x1="9.2091" y1="20.9318" x2="9.2091" y2="9.91821e-05" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6564FF"/>
                      <stop offset="1" stopColor="#18EDDC"/>
                      </linearGradient>
                      </defs>
                    </svg>
                    <Logo />
                  </Link>
                  <nav className="main-menu">
                    <ul>
                      {mainMenu.map((item) => {
                          return <li key={item.key}><Link href={item.href}>{item.labelKey}</Link></li>
                      })}
                    </ul>
                  </nav>
                </div>

                <div className="header__right_part"> 
                  <div className="s-button-launch-wrapper-reverse">
                    <a href={TG_BOT_URL} target="_blank" className="s-button s-button--small" rel="nonoopener nofollow">Открыть MCard</a>
                    {/* <QrButton isSmall={true} color="white-transparent" clickEvent={openMenu} mouseEnter={() => {setIshover(true);}} /> */}

                    <button className="qr-button qr-button--small white-transparent" onClick={openMenu} onMouseEnter={() => {setIshover(true);}}>
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_263_49" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                          <rect width="35" height="35" fill="#D9D9D9"/>
                          </mask>
                          <g mask="url(#mask0_263_49)">
                          <path className="hover-path" d="M5.10352 16.0416V5.10413H16.041V16.0416H5.10352ZM7.29102 13.8541H13.8535V7.29163H7.29102V13.8541ZM5.10352 29.8958V18.9583H16.041V29.8958H5.10352ZM7.29102 27.7083H13.8535V21.1458H7.29102V27.7083ZM18.9577 16.0416V5.10413H29.8952V16.0416H18.9577ZM21.1452 13.8541H27.7077V7.29163H21.1452V13.8541ZM27.1608 29.8958V27.1614H29.8952V29.8958H27.1608ZM18.9577 21.6927V18.9583H21.6921V21.6927H18.9577ZM21.6921 24.427V21.6927H24.4264V24.427H21.6921ZM18.9577 27.1614V24.427H21.6921V27.1614H18.9577ZM21.6921 29.8958V27.1614H24.4264V29.8958H21.6921ZM24.4264 27.1614V24.427H27.1608V27.1614H24.4264ZM24.4264 21.6927V18.9583H27.1608V21.6927H24.4264ZM27.1608 24.427V21.6927H29.8952V24.427H27.1608Z" fill="black"/>
                          </g>
                      </svg>
                      <div className="qr-button-hover-wrapper qr-button-hover-wrapper--bottom">
                          <div>
                              <div className="qr-code">
                                  <img src="/svg/qr-code-hover.svg" alt="qr code" title="qr-code" width="132" height="132" loading="lazy" decoding="async"/>
                              </div>
                              <div className="qr-code-social">
                                  <Socials />
                              </div>
                          </div>
                      </div>
                    </button>

                  </div>
                </div>
            </div>
            {/* <div className="header-hover" onMouseLeave={() => {setIshover(false);}}>
              <div className="header-hover__wrapper">
                  <div className="header-qr-code">
                    <img src="/svg/header-qr-code.svg" alt="Header qr code" width="150" height="150" loading="lazy" decoding="async" />
                  </div>
                  <div className="header-socials">
                    <Socials />
                  </div>
              </div>
            </div> */}
          </div>
      </header>
    </>
  );
}
