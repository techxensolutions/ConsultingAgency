import React from "react";

const HealthCareers = () => {
  return (
    <div className="my-8 md:my-20">
      <div className="px-[80px] py-[60px] bg-[#101010]">
        <h1 className="text-5xl font-bold text-white mb-6">Careers</h1>
        <p className="text-white text-lg  ">
          Grow your careers at the heart of change
        </p>

        <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#7500C0] mt-6  group">
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#a100ff]  group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Join us
          </span>
        </button>
      </div>
    </div>
  );
};

export default HealthCareers;
