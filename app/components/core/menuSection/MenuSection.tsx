'use client';

import { ACTIVE_CLASS, TG_BOT_URL } from "@/app/utils/constants";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { LogoBlack } from "../Logo";
import { mainMenu } from "@/app/config/menu.main";


type MenuSectionProps = {
 id: string;
 isActive: boolean;
 closeMenu: () => void;
};

export default function MenuSection({id, isActive, closeMenu}:MenuSectionProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isActive) return;
        const dialog = dialogRef.current;
        if (!dialog) return;

        dialog.showModal();
        closeButtonRef.current?.focus();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
        };
    }, [isActive]);

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1080px)');
        const handleResize = () => {
            if (desktop.matches && isActive) closeMenu();
        };
        handleResize();
        desktop.addEventListener('change', handleResize);
        return () => desktop.removeEventListener('change', handleResize);
    }, [isActive, closeMenu]);

    return (
        <dialog
            ref={dialogRef}
            id={id}
            aria-label="Меню MCard"
            className={`mobile-menu-section ${isActive ? ACTIVE_CLASS : ''}`}
            onCancel={(event) => { event.preventDefault(); closeMenu(); }}
            onClick={(event) => { if (event.target === event.currentTarget) closeMenu(); }}
            onKeyDown={(event) => {
                if (event.key !== 'Tab') return;
                const controls = event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)');
                const first = controls[0];
                const last = controls[controls.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first?.focus();
                }
            }}
        >
            <div className="mobile-menu-section-wrapper">
                <div className="mobile-menu__header">
                    <Link className="mobile-menu__logo svg" href="/" aria-label="На главную MCard" onClick={closeMenu}>
                        <LogoBlack />
                    </Link>    
                    <button ref={closeButtonRef} type="button" className="mobile-menu__close" onClick={closeMenu} aria-label="Закрыть меню">
                        <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_213_3371" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                            <rect width="32" height="32" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_213_3371)">
                            <path d="M8.53391 24.8716L7.12891 23.4666L14.5956 16L7.12891 8.5333L8.53391 7.1283L16.0006 14.595L23.4672 7.1283L24.8722 8.5333L17.4056 16L24.8722 23.4666L23.4672 24.8716L16.0006 17.405L8.53391 24.8716Z" fill="#1C1B1F"/>
                            </g>
                        </svg>
                    </button>
                </div>

                <nav className="mobile-menu__list" aria-label="Основная навигация">
                    <ul>
                        {mainMenu.map((item) => {
                            return <li key={item.key}><Link href={item.href} onClick={closeMenu}>{item.labelKey}</Link></li>
                        })}
                    </ul>
                </nav>

                <div className="mobile-menu__footer">
                    <a href={TG_BOT_URL} target="_blank" className="s-button" rel="nonoopener nofollow" onClick={closeMenu}>Открыть MCard</a>
                </div>
            </div>    
        </dialog>
    );
}
