"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRef = useRef(null);

  const navigation = [
    {
      title: "What we do",
      path: "/what-we-do",
      subcategories: [
        {
          title: "Find a job",
          subcategories: ["Search for jobs", "Job alerts"],
        },
        {
          title: "Life at Accenture",
          subcategories: [
            "Working here",
            "Benefits",
            "Our communities",
            "Work environment",
            "Careers blog",
          ],
        },
        {
          title: "How we hire",
          subcategories: ["Hiring journey", "Pro tips", "Interview process"],
        },
      ],
    },
    {
      title: "What we think",
      path: "/what-we-think",
      subcategories: [],
    },
    {
      title: "Who we are",
      path: "/who-we-are",
      subcategories: [
        {
          title: "Find a job",
          subcategories: ["Search for jobs", "Job alerts"],
        },
        {
          title: "Life at Accenture",
          subcategories: [
            "Working here",
            "Benefits",
            "Our communities",
            "Work environment",
            "Careers blog",
          ],
        },
        {
          title: "How we hire",
          subcategories: ["Hiring journey", "Pro tips", "Interview process"],
        },
      ],
    },
    {
      title: "Careers",
      path: "/careers",
      subcategories: [
        {
          title: "Find a job",
          subcategories: ["Search for jobs", "Job alerts"],
        },
        {
          title: "Life at Accenture",
          subcategories: [
            "Working here",
            "Benefits",
            "Our communities",
            "Work environment",
            "Careers blog",
          ],
        },
        {
          title: "How we hire",
          subcategories: ["Hiring journey", "Pro tips", "Interview process"],
        },
      ],
    },
  ];

  const handleLinkClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setState(false);
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="items-center px-8 max-w-screen-xl mx-auto md:flex md:px-12">
      <div className="flex items-center justify-between py-3 md:py-5 md:block">
        <Link href="/">
          <span>
            <svg
              role="img"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Accenture</title>
              <path
                d="M0 22.6L17.66 16.03L0 9.13V0L30.24 12.18V19.75L0 32V22.6Z"
                fill="#A100FF"
              ></path>
            </svg>
          </span>
        </Link>

        <div className="md:hidden">
          <button
            className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          state ? "block" : "hidden"
        }`}
      >
        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item, idx) => (
            <li key={idx} className="text-white hover:text-gray text-sm">
              <div
                onClick={() => handleLinkClick(idx)}
                className="cursor-pointer"
              >
                {item.title}
                {item?.subcategories?.length > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="ml-2 inline-block h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                  </svg>
                )}
              </div>
              {activeIndex === idx && item.subcategories.length > 0 && (
                <div className="relative">
                  <div className="absolute left-0 w-96  mt-2  bg-white text-black p-4 shadow-lg rounded-md z-40">
                    {item.subcategories.map((sub, subIdx) => (
                      <div key={subIdx} className="hover:bg-gray-200 p-2">
                        {Array.isArray(sub.subcategories) &&
                        sub.subcategories.length > 0 ? (
                          <>
                            <div className="font-bold">{sub.title}</div>
                            <div className="ml-4">
                              {sub.subcategories.map((subSub, subSubIdx) => (
                                <div
                                  key={subSubIdx}
                                  className="hover:bg-gray-200 p-2 cursor-pointer"
                                >
                                  {subSub}
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          sub
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:inline-block">
        <div className="flex items-center cursor-pointer">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-2.5  h-4 w-4 "
              fill="#fff"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z" />
            </svg>
          </div>
          <p className="text-white hover:text-gray text-sm">USA</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="ml-2.5  h-4 w-4 "
              fill="#fff"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
