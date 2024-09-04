import React from "react";

const Leadership = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-12 gap-12 py-8 md:py-16  px-8  max-w-screen-xl mx-auto    items-center">
        <div>
          <h2 className="text-5xl font-bold text-black mb-12">
            Our leadership team
          </h2>
          <p className="mb-6 text-md">
            Meet the team who are leading the change across industries,
            functions, platforms and partnerships. At the forefront of
            reinvention, they lead teams across the globe to prepare businesses
            to reshape their future and emerge stronger, prepared for whatever
            lies ahead.
          </p>
          <button className="mt-6 px-4 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition">
            MEET THE S&C TEAM
          </button>
        </div>

        <div className="">
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/accenture-strategy-consulting-leadership-575x444?qlt=85&wid=600&ts=1721903759466&fit=constrain&dpr=off"
            alt="Banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Leadership;
