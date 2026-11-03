import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  canonical: string;
};

export function createPageMetadata({ title, description, canonical }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "MCard",
      title,
      description,
      images: [
        {
          url: "/images/mcard.png",
          width: 1600,
          height: 960,
          alt: "MCard preview",
        },
      ],
      locale: "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/mcard.png"],
    },
  };
}
