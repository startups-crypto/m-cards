import type { MetadataRoute } from "next";
import {
  PRIVACY_POLICY_PAGE_LINK,
  SITE_URL,
  TERM_PAGE_LINK,
} from "@/app/utils/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: new URL(TERM_PAGE_LINK, SITE_URL).href },
    { url: new URL(PRIVACY_POLICY_PAGE_LINK, SITE_URL).href },
  ];
}
