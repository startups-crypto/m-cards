"use client";

import clsx from "clsx";
import { useEffect, useId, useRef, useState } from "react";
import Socials from "../socials/Socials";

type QrButtonProps = {
    isSmall?: boolean;
    color?: "" | "white-transparent" | "white" | "black-transparent";
    labelPosition?: "bottom" | "top" | "top-left" | "";
    className?: string;
    onOpenChange?: (isOpen: boolean) => void;
};

export function QrIcon() {
    return (
        <svg aria-hidden="true" focusable="false" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="hover-path" d="M5.10352 16.0416V5.10413H16.041V16.0416H5.10352ZM7.29102 13.8541H13.8535V7.29163H7.29102V13.8541ZM5.10352 29.8958V18.9583H16.041V29.8958H5.10352ZM7.29102 27.7083H13.8535V21.1458H7.29102V27.7083ZM18.9577 16.0416V5.10413H29.8952V16.0416H18.9577ZM21.1452 13.8541H27.7077V7.29163H21.1452V13.8541ZM27.1608 29.8958V27.1614H29.8952V29.8958H27.1608ZM18.9577 21.6927V18.9583H21.6921V21.6927H18.9577ZM21.6921 24.427V21.6927H24.4264V24.427H21.6921ZM18.9577 27.1614V24.427H21.6921V27.1614H18.9577ZM21.6921 29.8958V27.1614H24.4264V29.8958H21.6921ZM24.4264 27.1614V24.427H27.1608V27.1614H24.4264ZM24.4264 21.6927V18.9583H27.1608V21.6927H24.4264ZM27.1608 24.427V21.6927H29.8952V24.427H27.1608Z" fill="black"/>
        </svg>
    );
}

export default function QrButton({isSmall = false, color = '', labelPosition = 'top', className, onOpenChange}: QrButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = useId();
    const controlRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const openedByHover = useRef(false);

    useEffect(() => {
        onOpenChange?.(isOpen);
    }, [isOpen, onOpenChange]);

    useEffect(() => {
        if (!isOpen) return;
        const dismiss = (event: PointerEvent) => {
            if (event.target instanceof Node && !controlRef.current?.contains(event.target)) setIsOpen(false);
        };
        document.addEventListener('pointerdown', dismiss);
        return () => document.removeEventListener('pointerdown', dismiss);
    }, [isOpen]);

    return (
        <div
            ref={controlRef}
            className={clsx("qr-control", className)}
            data-open={isOpen}
            onMouseEnter={() => {
                openedByHover.current = true;
                setIsOpen(true);
            }}
            onMouseLeave={() => {
                openedByHover.current = false;
                if (!controlRef.current?.contains(document.activeElement)) setIsOpen(false);
            }}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
            }}
            onKeyDown={(event) => {
                if (event.key === 'Escape' && isOpen) {
                    event.preventDefault();
                    event.stopPropagation();
                    setIsOpen(false);
                    openedByHover.current = false;
                    buttonRef.current?.focus();
                }
            }}
        >
            <button
                ref={buttonRef}
                type="button"
                className={clsx("qr-button", isSmall && "qr-button--small", color && `qr-button--${color}`)}
                aria-label="Показать QR-код для открытия MCard"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                    setIsOpen(openedByHover.current || !isOpen);
                    openedByHover.current = false;
                }}
            >
                <QrIcon />
            </button>
            <div id={panelId} hidden={!isOpen} className={clsx("qr-button-hover-wrapper", labelPosition && `qr-button-hover-wrapper--${labelPosition}`)}>
                <div>
                    <div className="qr-code">
                        <img src="/svg/qr-code-hover.svg" alt="QR-код для открытия MCard" width="132" height="132" loading="lazy" decoding="async" />
                    </div>
                    <div className="qr-code-social"><Socials /></div>
                </div>
            </div>
        </div>
    );
}
