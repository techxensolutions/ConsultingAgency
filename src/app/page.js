import AccentureNews from "@/components/landingPage/AccentureNews";
import BannerSection from "@/components/landingPage/BannerSection";
import CareersSection from "@/components/landingPage/CareersSection";
import GlobalRecognition from "@/components/landingPage/GlobalRecognition";
import LandingLinkCard from "@/components/landingPage/LandingLinkCard";
import ValueSlider from "@/components/landingPage/ValueSlider";

export default function Home() {
  return (
    <div className="px-8 max-w-screen-xl mx-auto  md:px-12 my-16">
      <BannerSection />
      <LandingLinkCard />
      <ValueSlider />
      <GlobalRecognition />
      <CareersSection />
      <AccentureNews />
    </div>
  );
}
