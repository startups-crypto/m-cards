import { SITE_URL } from "@/app/utils/constants";
import Banners from "../components/banners/Banners";
import Capabilities from "../components/capabilities/Capabilities";
import Commission from "../components/commission/Commission";
import Hero from "../components/hero/Hero";
import HowItWork from "../components/howItWork/HowItwork";
import Information from "../components/information/Information";
import Rules from "../components/rules/Rules";
import RunningLine from "../components/runningLine/RunningLine";
import ScrollBanner from "../components/scrollBanner/ScrollBanner";
import Security from "../components/security/Security";

export default function Home() {
  return (
      <main role="main">
          {/* React hoists this into <head>; Next.js metadata strips the root URL's trailing slash. */}
          <link rel="canonical" href={SITE_URL} />
          <Hero />
          <RunningLine />
          <HowItWork />
          <Banners />
          <Capabilities />
          <Commission />
          <Security />
          <Information />
          <ScrollBanner />
          <Rules />
      </main>
  );
}
