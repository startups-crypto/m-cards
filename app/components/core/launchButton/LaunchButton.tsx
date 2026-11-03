import clsx from "clsx";
import QrButton from "../qrButton/QrButton";

type LaunchButtonType = {
    text: string;
    styles?: string;
    typeButton?: "full" | "";
    color?: "white" | "black" | "white-transparent" | "white-m-black-d" | "";
    qrColor?: "white-transparent" | "";
    labelPosition?: "bottom" | "top" | "top-left" | "";
    href?: string;
    target?: "_blank" | "";
};

export default function LaunchButton ({text, styles, typeButton = "", color = "black", qrColor = "", labelPosition = "top", href="#", target=""}:LaunchButtonType) {
    const colorClass = color == "" ? "" : "s-button--" + color;

    return (
        <div className={clsx(styles, "s-button-launch-wrapper")}>
            <a href={href} className={clsx("s-button", typeButton == "full" ? "s-button--full" : "", colorClass)} target={target} rel={target == "_blank" ? "nonoopener nofollow" : ""}>{text}</a>
            <QrButton color={qrColor} labelPosition={labelPosition} />
        </div>
    );
}