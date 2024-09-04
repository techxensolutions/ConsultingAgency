import React from "react";

const EnterpriseReinvention = () => {
  return (
    <div className="mt-16 relative  ">
      <div className="sticky top-10">
        <img
          src="/banner/BannerStatic.jpg"
          alt="Banner"
          className="h-[400px] w-full object-cover"
        />
      </div>
      <div className=" absolute -top-12 left-20 z-10 border-t-4 border-primary max-w-lg  py-16 px-8 bg-white bg-opacity-80 backdrop-blur-md shadow-lg ">
        <h3 className="text-sm font-semibold text-gray-600">
          STRATEGY & CONSULTING
        </h3>
        <h1 className="text-4xl font-bold text-black mt-2">
          Total Enterprise Reinvention
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          See how &quot;Reinventors&quot; are setting a new performance frontier for their
          companies—and entire industries.
        </p>
        <button className="mt-6 px-4 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition">
          READ MORE
        </button>
      </div>
      <div className="bg-[#F2F2F2] min-h-[400px]"></div>
    </div>
  );
};

export default EnterpriseReinvention;
