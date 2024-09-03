import Awards from "@/components/healthPage/Awards";
import HealthBanner from "@/components/healthPage/HealthBanner";
import Healthcare from "@/components/healthPage/Healthcare";
import HealthCareers from "@/components/healthPage/HealthCareers";
import HealthNavbar from "@/components/healthPage/HealthNavbar";
import HealthSegments from "@/components/healthPage/HealthSegments";
import Leaders from "@/components/healthPage/Leaders";
import Partners from "@/components/healthPage/Partners";
import ReinventHealth from "@/components/healthPage/ReinventHealth";
import TrendingHealth from "@/components/healthPage/TrendingHealth";
import React from "react";

const page = () => {
  return (
    <div>
      <HealthNavbar />
      <div className="px-8 max-w-screen-xl mx-auto  md:px-12 my-16">
        <HealthBanner />
        <Healthcare />
        <ReinventHealth />
        <HealthSegments />
        <TrendingHealth />
        <Partners />
        <Awards />
        <Leaders />
      </div>
      <HealthCareers />
    </div>
  );
};

export default page;
