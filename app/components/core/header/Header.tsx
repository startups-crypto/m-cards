'use client';
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { AnimationEvent as ReactAnimationEvent } from "react";
import QrButton, { QrIcon } from "../qrButton/QrButton";
import { mainMenu } from "@/app/config/menu.main";
import MenuSection from "../menuSection/MenuSection";
import { Logo } from "../Logo";
import clsx from "clsx";
import { ACTIVE_CLASS, TG_BOT_URL } from "@/app/utils/constants";

type HeaderProps = {
  color?: "black" | "white" | "black-text" | "";
};

export default function Header({ color = '' }: HeaderProps) {
  const [isActive, seActive] = useState(false);
  const [headerState, setHeaderState] = useState<"normal" | "change" | "scroll" | "">("normal");
  const [sectionColorClass, setSectionColorClass] = useState("");
  const [isHover, setIshover] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement | null>(null);

  const openMenu = () => {
    seActive(true);
  };

  const closeMenu = useCallback(() => {
    seActive(false);
  }, []);

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
      <div aria-hidden="true" className={clsx("header-overlay", isHover ? ACTIVE_CLASS : "")}></div>
      <MenuSection id={menuId} isActive={isActive} closeMenu={closeMenu}/>
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
                  <Link href="/" className="logo svg" aria-label="На главную MCard">
                    <svg aria-hidden="true" focusable="false" className="logo-m" width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <nav className="main-menu" aria-label="Основная навигация">
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
                    <button type="button" className="qr-button qr-button--small white-transparent header-menu-button" onClick={openMenu} aria-label="Открыть меню" aria-expanded={isActive} aria-controls={menuId} aria-haspopup="dialog">
                      <QrIcon />
                    </button>
                    <QrButton isSmall labelPosition="bottom" className="header-qr-control" onOpenChange={setIshover} />

                  </div>
                </div>
            </div>
          </div>
      </header>
    </>
  );
}
