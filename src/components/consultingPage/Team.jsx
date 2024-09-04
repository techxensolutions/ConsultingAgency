import React from "react";

const Team = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:px-12 gap-12 py-8 md:py-16  px-8  max-w-screen-xl mx-auto    items-center">
      <div>
        <h2 className="text-5xl font-bold text-black mb-12">Join our team</h2>
        <p className="mb-6 text-md">
          The starting point of reinvention starts here – with more than 50,000
          people who are excited to bring change across industries, functions,
          platforms, and partnerships. Bringing the best of technology and human
          ingenuity, they are architecting the future for businesses and
          communities around the globe.
        </p>
        <button className="mt-6 px-4 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition">
          EXPLORE
        </button>
      </div>

      <div className="">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Join-Our-Team-652x354?qlt=85&wid=600&ts=1720595086839&fit=constrain&dpr=off"
          alt="Banner"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Team;
