"use client";
import Link from "next/link";
import React, { useState } from "react";

const HealthSegments = () => {
  const [activeSegment, setActiveSegment] = useState("Health Providers");

  const segments = [
    {
      name: "Health Providers",
      content:
        "Stabilize the workforce to deliver better experiences and outcomes by bringing together technology and humans to rethink care delivery.",
      img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Health-Providers:rad-16x9?ts=1724741871747&fit=constrain&dpr=on,1&wid=480",
    },
    {
      name: "Health Payers",
      content:
        "Innovate and drive value-based care, optimize operations, and enable consumer-centric services.",
      img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Health-Payers:rad-16x9?ts=1724741871815&fit=constrain&dpr=on,1&wid=480",
    },
    {
      name: "Public Health",
      content:
        "Enhance public health systems by leveraging technology for better health outcomes and accessibility.",
      img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Public-Health:rad-16x9?ts=1724741871880&fit=constrain&dpr=on,1&wid=480",
    },
  ];

  const handleSegmentClick = (segmentName) => {
    setActiveSegment(segmentName);
  };

  return (
    <div className="py-8 md:py-16">
      <h1 className="text-4xl font-bold text-white mb-12">
        Segments we support
      </h1>
      <div className="flex py-8  text-white">
        <div className="w-2/3">
          <ul>
            {segments.map((segment) => (
              <li
                key={segment.name}
                className={`cursor-pointer mb-4 ${
                  activeSegment === segment.name
                    ? "font-bold text-white text-3xl"
                    : "text-gray font-bold text-2xl "
                }`}
                onClick={() => handleSegmentClick(segment.name)}
              >
                <span
                  className={`${
                    activeSegment === segment.name ? "text-[#A100FF] mr-2" : ""
                  }`}
                >
                  {activeSegment === segment.name && <pan>&#8226;</pan>}
                </span>
                {segment.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/3 pl-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">{activeSegment}</h3>
            <p className="text-gray-300 mb-4">
              {
                segments.find((segment) => segment.name === activeSegment)
                  .content
              }
            </p>
            <Link
              href="#"
              className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
            >
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="w-3 h-3 inline-block mb-1 ml-2"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </Link>
          </div>
          <div className="mt-8">
            <img
              src={
                segments.find((segment) => segment.name === activeSegment).img
              }
              alt={activeSegment}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSegments;
