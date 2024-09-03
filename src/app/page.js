import AccentureNews from "@/components/AccentureNews";
import BannerSection from "@/components/BannerSection";
import CareersSection from "@/components/CareersSection";
import GlobalRecognition from "@/components/GlobalRecognition";
import LandingLinkCard from "@/components/LandingLinkCard";
import ValueSlider from "@/components/ValueSlider";

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
