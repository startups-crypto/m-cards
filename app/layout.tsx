import {inter, bion} from './fonts';
import "@/app/styles/global.scss";
import type { Metadata } from "next";
import { SITE_URL } from './utils/constants';

const title  = 'MCard — Виртуальная карта Mastercard для оплаты криптой и рублями';
const description  = 'Получите виртуальную карту Mastercard за 60 секунд прямо в Telegram. Пополняйте криптовалютой (USDT) или рублями через СБП. Работает с Apple Pay, Google Pay, Amazon, Booking, Spotify и тысячами других сервисов по всему миру.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: title,
  description: description,
  icons: {
    icon: [
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
  openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: "MCard",
      title: title,
      description: description,
      images: [
        {
          url: "/images/mcard.png",
          width: 1600,
          height: 960,
          alt: "MCard preview",
        },
      ],
      locale: 'ru',
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/mcard.png"],
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = `${inter.variable} ${bion.variable}`;

  return (
    <html lang="en" className={className}>
      <body>
        {children}
      </body>
    </html>
  );
}
