import React from "react";

const HealthBanner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-16 justify-between  ">
        <div className="flex-1 mt-8 md:mt-0">
          <img
            alt="healthcare-illustration"
            src="https://dynamicmedia.accenture.com/is/content/accenture/Accenture-health-index-illustration-hero-image-1?ts=1724741869208&&fmt=webp-alpha&dpr=off"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-white">
            Humanizing healthcare
          </h2>
          <p className="mt-12 text-white text-2xl">
            People expect intuitive access to their healthcare and personalized
            experiences. Leaders that reinvent to create easy access and
            engaging experiences will stay resilient while delivering better
            outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthBanner;
