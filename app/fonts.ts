import localFont from "next/font/local";

export const inter = localFont({
    src: [
        {
            path: "./../public/fonts/Inter/static/Inter_18pt-Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "./../public/fonts/Inter/static/Inter_18pt-SemiBold.woff2",
            weight: "600",
            style: "normal"
        }

    ],
    variable: "--font-inter"
});

export const bion = localFont({
    src: [
        {
            path: "./../public/fonts/bion/Bion-BoldCond.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "./../public/fonts/bion/Bion-BookCond.woff2",
            weight: "300",
            style: "normal"
        }
    ],
    variable: "--font-bion"
});
