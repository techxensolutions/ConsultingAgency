"use client";
import Link from "next/link";
import React, { useState } from "react";

const HealthNavbar = () => {
  const [state, setState] = useState(false);
  const navigation = [
    { title: " What to do", path: "" },
    { title: "  Segments", path: "" },
    { title: "What’s trending", path: "" },
    { title: " Leaders", path: "" },
    { title: "  Careers", path: "" },
  ];
  return (
    <div>
      <div className="bg-[#460073] border-b border-[#7500C0] w-full md:static md:text-sm md:border-none">
        <div className="items-center px-8 max-w-screen-xl mx-auto md:flex  md:px-8">
          <div className="flex items-center justify-between h-[60px] md:h-auto md:block">
            <Link href="">
              <span className="font-bold text-xl  text-white">Health</span>
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className=" inline-block h-4 w-4"
                    fill="#fff"
                  >
                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className=" inline-block h-4 w-4"
                    fill="#fff"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-2 md:flex md:space-x-2 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                    <li key={idx} className="relative text-white hover:bg-[#7500C0] p-4 group">
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  
                );
              })}
              <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthNavbar;
