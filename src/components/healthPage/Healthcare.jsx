import React from "react";

const Healthcare = () => {
  return (
    <div>
      <div className=" my-8 md:my-16 ">
        <h2 className="text-4xl font-bold text-white mb-12">Healthcare now</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="">
            <div className="w-[40px] h-[5px] bg-primary mb-6"></div>
            <h3 className="text-5xl font-bold text-white">85%</h3>
            <p className="text-white mt-8">
              of CEOs and 79% of health system leaders see substantial or
              transformative change ahead
            </p>
          </div>
          <div className="">
            <div className="w-[40px] h-[5px] bg-primary mb-6"></div>
            <h3 className="text-5xl font-bold text-white">1.82x</h3>
            <p className="text-white mt-8">
              increase in home and virtual care expected by health executives
              over the next decade
            </p>
          </div>
          <div className="">
            <div className="w-[40px] h-[5px] bg-primary mb-6"></div>
            <h3 className="text-5xl font-bold text-white">13M</h3>
            <p className="text-white mt-8">
              the projected shortage of nurses by 2030 according to the
              International Council of Nurses
            </p>
          </div>
          <div className="">
            <div className="w-[40px] h-[5px] bg-primary mb-6"></div>
            <h3 className="text-5xl font-bold text-white">70%</h3>
            <p className="text-white mt-8">
              of healthcare workers&apos; tasks in the US could be redesigned by
              technology augmentation or automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
