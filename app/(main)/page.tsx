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
