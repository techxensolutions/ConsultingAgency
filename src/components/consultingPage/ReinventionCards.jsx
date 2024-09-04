import React from "react";

const ReinventionCards = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3   py-8 md:py-16  px-8 md:px-12 max-w-screen-xl mx-auto">
        <div className="cursor-pointer">
          <img
            alt="scientist with a chip"
            src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Reinvention-447x367?qlt=85&wid=480&ts=1720595088011&$auto-jpg$&fit=constrain&dpr=off"
            className="h-[390px]  w-full transform transition duration-300 hover:scale-110"
          />
          <h3 className="text-3xl  hover:text-primary hover:underline  mt-6">Reinvention driven by insights</h3>
          <p className="text-black mt-6">
            We build trusted relationships with leaders. We curate our knowledge
            by using proprietary assets, technology tools, and data.
          </p>
        </div>
        <div className="mt-8 cursor-pointer">
          <img
            alt="colorful eye"
            src="https://dynamicmedia.accenture.com/is/image/accenture/Reinvention-That-Can-Be-Repeated-406x406?qlt=85&wid=480&ts=1720595096800&fit=constrain&dpr=off"
            className="h-[390px]  w-full transform transition duration-300 hover:scale-110 "
          />
          <h3 className="text-3xl  hover:text-primary hover:underline  mt-6">Reinvention that can be repeated</h3>
          <p className="text-black mt-6">
            We can accelerate 360° value and end-to-end transformations by
            combining our expertise across strategy, industry, and function.
          </p>
        </div>
        <div className="mt-16 cursor-pointer">
          <img
            alt="basketball court"
            src="https://dynamicmedia.accenture.com/is/image/accenture/Reinvention-Powered-by-People-406x406?qlt=85&wid=480&ts=1720595097145&fit=constrain&dpr=off"
            className="h-[390px] w-full transform transition duration-300 hover:scale-110"
          />
          <h3 className="text-3xl hover:text-primary hover:underline  mt-6">
            Reinvention powered by people
          </h3>
          <p className="text-black mt-6">
            We bring the best of a diverse global network of innovation experts.
            They&apos;re the reason that reinvention starts here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReinventionCards;
