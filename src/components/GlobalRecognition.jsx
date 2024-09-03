"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const GlobalRecognition = () => {
  const contentRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const divs = document.querySelectorAll(".scroll-div");
      divs.forEach((div, index) => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const divPosition = div.offsetTop + div.clientHeight / 2;
        if (scrollPosition > divPosition) {
          div.classList.add(
            `animate-div-${index % 2 === 0 ? "left" : "right"}`
          );
        } else {
          div.classList.remove(
            `animate-div-${index % 2 === 0 ? "left" : "right"}`
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-8 md:py-16 relative">
      <div
        ref={contentRef}
        className={`text-white text-center ${
          isFixed ? "fixed top-1/2 transform -translate-y-1/2" : ""
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-bold">
          Global recognition and awards
        </h1>
      </div>
      <div className="mt-96 flex flex-col  space-y-8">
        <div className="scroll-div bg-[#E2062E] text-white w-[515px] h-[345px] z-40 p-8 relative overflow-hidden group">
          <h2 className="absolute bottom-6 text-3xl font-serif transition-transform duration-300 transform group-hover:translate-y-16">
            A Great Place to Work
          </h2>
          <p className=" text-lg font-serif opacity-0 transform translate-y-full transition-opacity transition-transform duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            No. 10 on the World's Best Workplaces™ list. This recognition is
            based on feedback from our people—measuring their level of trust,
            pride and camaraderie at work.
          </p>
          <div className="absolute bottom-6 right-6 transform translate-y-0 opacity-0 transition-opacity transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href="#"
              className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
            >
              <span>See related awards</span>
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
        </div>

        <div className="scroll-div bg-[#460073] text-white w-[515px] h-[345px] z-40 p-8 relative overflow-hidden group">
          <h2 className="absolute bottom-6 text-3xl font-serif transition-transform duration-300 transform group-hover:translate-y-16">
            A Great Place to Work
          </h2>
          <p className=" text-lg font-serif opacity-0 transform translate-y-full transition-opacity transition-transform duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            No. 10 on the World's Best Workplaces™ list. This recognition is
            based on feedback from our people—measuring their level of trust,
            pride and camaraderie at work.
          </p>
          <div className="absolute bottom-6 right-6 transform translate-y-0 opacity-0 transition-opacity transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href="#"
              className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
            >
              <span>See related awards</span>
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
        </div>

        <div className="scroll-div bg-[#0041F0] text-white w-[515px] h-[345px] z-40 p-8 relative overflow-hidden group">
          <h2 className="absolute bottom-6 text-3xl font-serif transition-transform duration-300 transform group-hover:translate-y-16">
            A Great Place to Work
          </h2>
          <p className=" text-lg font-serif opacity-0 transform translate-y-full transition-opacity transition-transform duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            No. 10 on the World's Best Workplaces™ list. This recognition is
            based on feedback from our people—measuring their level of trust,
            pride and camaraderie at work.
          </p>
          <div className="absolute bottom-6 right-6 transform translate-y-0 opacity-0 transition-opacity transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href="#"
              className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
            >
              <span>See related awards</span>
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
        </div>
      </div>
    </div>
  );
};

export default GlobalRecognition;
