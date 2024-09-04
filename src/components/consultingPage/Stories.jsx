import React from "react";

const Stories = () => {
  return (
    <div className=" max-w-screen-xl mx-auto py-16 px-8  md:px-12">
      <h2 className="md:text-5xl text-4xl font-bold mb-12">
        Stories of reinvention and value
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-[#FDFDFD] md:text-center text-left flex items-center justify-center  ">
          <p className="mb-6 text-md">
            Please enable Advertising and Social Media Cookies to be able to see{" "}
            <br /> this content.
            <br /> Click here to update your cookie settings.
          </p>
        </div>
        <div className="p-6 ">
          <p className="mb-6 font-bold text-md">
            Accenture’s CEO Julie Sweet discusses Mars’ digital transformation
          </p>
          <p className="mb-6 text-md">
            Accenture’s chair and CEO Julie Sweet sat down with Sandeep Dadlani
            to discuss how the partnership with Mars helped them catapult to
            becoming a digital-first industry leader.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
