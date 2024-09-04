import Link from "next/link";
import React from "react";

const ReportCard = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex gap-4 flex-wrap p-4    shadow-md">
        <img
          className="w-full md:w-1/4 "
          src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-X-Promotion-Speedbump-288x162?qlt=85&wid=320&ts=1720594718957&$auto-png-alpha$&fit=constrain&dpr=off"
          alt="Accenture 360 Value Reporting Experience"
        />

        <div className="hidden md:block ml-6 w-[4px] bg-gradient-to-b from-[#0f0] to-[#00baff]"></div>
        <div className="ml-4 flex-1">
          <h2 className="text-lg font-bold text-black">
            THE ACCENTURE 360° VALUE REPORTING EXPERIENCE
          </h2>
          <p className="text-black text-3xl mt-2">
            Measuring our success by the value we deliver in all directions.
          </p>
          <div className="mt-6">
            <Link
              href="#"
              className=" font-bold relative text-[#004DFE] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-[#004DFE] before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-[#004DFE] after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
            >
              <span className="mr-2 ">Read more</span>&#x2794;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
