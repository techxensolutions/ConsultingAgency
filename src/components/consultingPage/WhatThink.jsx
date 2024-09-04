import Link from "next/link";
import React from "react";

const WhatThink = () => {
  return (
    <div className="md:px-12 gap-12 py-8 md:py-12  px-8  max-w-screen-xl mx-auto   ">
      <div className="flex justify-between flex-wrap items-center  mb-12">
        <h2 className="text-5xl font-bold text-black">What we think</h2>
        <div className="">
          <Link
            href="#"
            className="text-lg font-bold relative text-[#004DFE] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-[#004DFE] before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-[#004DFE] after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
          >
            <span className="mr-2">VIEW MORE ARTICLES</span> &#x2794;
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-12">
        <div className="col-span-2">
          <div className="flex flex-col md:flex-row mb-6 ">
            <img
              className="w-full md:w-[184px] "
              src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Divestitures-Featured-Image-1920x1080?qlt=85&wid=320&ts=1721985066608&$auto-png$&fit=constrain&dpr=off"
              alt="Descriptive image of divestitures"
            />
            <div className="md:ml-6">
              <span className="text-black border-b-2 cursor-pointer hover:text-[#004DFE] border-[#004DFE] font-bold">
                Accenture Strategy
              </span>
              <h3 className="text-2xl font-extrabold cursor-pointer hover:text-[#004DFE] hover-underline mt-2">
                The secrets to seizing value from divestitures
              </h3>
              <p className="text-black  mt-4">
                Divestitures are an underutilized lever for growth and
                reinvention. Do executives know how to let go to grow? Read
                more.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-6 ">
            <img
              className="w-full md:w-[184px] "
              src="https://dynamicmedia.accenture.com/is/image/accenture/Rising-Costs-Cyber-Attacks-400x400?qlt=85&wid=320&ts=1723483945610&$auto-jpg$&fit=constrain&dpr=off"
              alt="Descriptive image of divestitures"
            />
            <div className="md:ml-6">
              <span className="text-black border-b-2 cursor-pointer hover:text-[#004DFE] border-[#004DFE] font-bold">
                Private Equity Services
              </span>
              <h3 className="text-2xl font-extrabold cursor-pointer hover:text-[#004DFE] hover-underline mt-2">
                Private equity and the rising cost of cyberattacks
              </h3>
              <p className="text-black  mt-4">
                Private equity is a prime target for cyberattacks. Firms can
                mitigate the risks, painlessly and without sacrificing speed.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-6">
            <img
              className="w-full md:w-[184px] "
              src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Breakthrough-Innovation-FeatImg-400x400?qlt=85&wid=320&ts=1720595161433&$auto-jpg$&fit=constrain&dpr=off"
              alt="Descriptive image of divestitures"
            />
            <div className="md:ml-6">
              <span className="text-black border-b-2 cursor-pointer hover:text-[#004DFE] border-[#004DFE] font-bold">
                Technology Innovation
              </span>
              <h3 className="text-2xl font-extrabold cursor-pointer hover:text-[#004DFE] hover-underline mt-2">
                Is your organization equipped for breakthrough innovation?
              </h3>
              <p className="text-black  mt-4">
                Cloud, AI and the metaverse are accelerating reinvention
                strategies. We show how to use them to scale breakthrough
                innovation.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-[#CCCCCC] mb-8">
            <span className="text-black border-b-2 cursor-pointer hover:text-[#004DFE] border-[#004DFE] font-bold">
              Talent & Organization
            </span>
            <p className="text-lg font-extrabold cursor-pointer hover:text-[#004DFE] hover-underline mt-2 mb-8">
              The CHRO as a growth executive
            </p>
          </div>
          <div className="border-b border-[#CCCCCC] mb-8">
            <span className="text-black border-b-2 cursor-pointer hover:text-[#004DFE] border-[#004DFE] font-bold">
              Sustainability
            </span>
            <p className="text-lg font-extrabold cursor-pointer hover:text-[#004DFE] hover-underline mt-2 mb-8">
              Reimagining the Agenda
            </p>
          </div>
          <div className="border-b border-[#CCCCCC] mb-8">
            <span className="text-black border-b-2 cursor-pointer hover:text-[#004DFE] border-[#004DFE] font-bold">
              Cloud
            </span>
            <p className="text-lg font-extrabold cursor-pointer  mt-2 mb-8 hover:text-[#004DFE] hover-underline">
              Maximizing your cloud advantage
            </p>
          </div>
          <div className="border-b border-[#CCCCCC] mb-8">
            <span className="text-black border-b-2 cursor-pointer hover:text-[#004DFE] border-[#004DFE] font-bold">
              Mergers and Acquisitions
            </span>
            <p className="text-lg font-extrabold cursor-pointer hover:text-[#004DFE] hover-underline mt-2 mb-8">
              A new playbook for today&apos;s M&A deals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatThink;
