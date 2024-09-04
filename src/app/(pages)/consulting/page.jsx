import AcrossIndustries from "@/components/consultingPage/AcrossIndustries";
import Advantage from "@/components/consultingPage/Advantage";
import ConsultingBanner from "@/components/consultingPage/ConsultingBanner";
import EnterpriseReinvention from "@/components/consultingPage/EnterpriseReinvention";
import Leadership from "@/components/consultingPage/Leadership";
import ReinventionCards from "@/components/consultingPage/ReinventionCards";
import ReinventionStart from "@/components/consultingPage/ReinventionStart";
import ReportCard from "@/components/consultingPage/ReportCard";
import Stories from "@/components/consultingPage/Stories";
import TabBar from "@/components/consultingPage/TabBar";
import Team from "@/components/consultingPage/Team";
import SongSection from "@/components/consultingPage/SongSection";
import React from "react";
import WhatThink from "@/components/consultingPage/WhatThink";

const page = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <ConsultingBanner />
      <TabBar />
      <div className="px-8 max-w-screen-xl mx-auto  my-16 md:px-12">
        <ReportCard />
      </div>
      <ReinventionStart />
      <ReinventionCards />
      <EnterpriseReinvention />
     
      <AcrossIndustries />
      <Advantage />
      <div className="bg-[#F2F2F2] my-12">
        <div className=" max-w-screen-xl mx-auto  px-8 py-12 md:px-12">
          <blockquote className=" border-l-4 border-primary pl-4  text-black text-4xl ">
            Reinvent to become the next best version of yourself
          </blockquote>
        </div>
      </div>
      <Stories />
      <div className="px-8 max-w-screen-xl mx-auto md:px-12 mb-12">
        <ReportCard />
      </div>
      <WhatThink />
      <Leadership />
      <Team />
      <SongSection />
    </div>
  );
};

export default page;
