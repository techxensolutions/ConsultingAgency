import BannerSection from "@/components/BannerSection";
import LandingLinkCard from "@/components/LandingLinkCard";

export default function Home() {
  return (
    <div className="px-8 max-w-screen-xl mx-auto  md:px-12 my-16">
      <BannerSection />
      <LandingLinkCard />
    </div>
  );
}
