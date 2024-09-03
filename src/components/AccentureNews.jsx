"use client";

import Link from "next/link";
import { title } from "process";
import React, { useEffect, useState } from "react";

const accentureSlider = [
  {
    date: "April  03, 2024",
    title:
      " Currys Selects Accenture and Microsoft to Accelerate Adoption of Generative AI ",
  },
  {
    date: "MArch  03, 2024",
    title:
      "  L3Harris and Accenture Collaborate to Accelerate Technology Reinvention for Growth ",
  },
  {
    date: "July  03, 2024",
    title:
      " Currys Selects Accenture and Microsoft to Accelerate Adoption of Generative AI ",
  },
  {
    date: "April  03, 2024",
    title:
      " L3Harris and Accenture Collaborate to Accelerate Technology Reinvention for Growth  ",
  },
  {
    date: "June  03, 2024",
    title:
      " Currys Selects Accenture and Microsoft to Accelerate Adoption of Generative AI ",
  },
  {
    date: "December  03, 2024",
    title:
      "  L3Harris and Accenture Collaborate to Accelerate Technology Reinvention for Growth  ",
  },
];
const AccentureNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prevSlide) =>
      prevSlide === accentureSlider.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? accentureSlider.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSlide]);

  return (
    <div className=" py-8 md:py-16 ">
      <div className=" text-white font-bold mb-8">
        <p className="text-3xl ">Accenture news</p>
      </div>

      <div>
        <div
          className={` my-12  transform transition-transform duration-700 ease-in-out ${
            direction === "right" ? "" : ""
          }`}
        >
          <div className=" max-w-5xl mx-auto">
            <h2 className="text-lg font-bold text-white">
              {accentureSlider[currentSlide].date}
            </h2>
            <p className="mt-8 text-4xl text-white">
              {accentureSlider[currentSlide].title}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6  ">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-secondary text-secondary-foreground p-2  hover:bg-secondary/80"
            >
              {isPlaying ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 ml-1.5"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5V19H14V5H8ZM0 5V19H6V5H0Z"></path>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 "
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 19V5L17 12L6 19Z"></path>
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center gap-6 p-4 ">
            <button
              onClick={prevSlide}
              className="bg-secondary text-secondary-foreground p-2  hover:bg-secondary/80"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                  fill-rule="nonzero"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-secondary text-secondary-foreground p-2  hover:bg-secondary/80"
            >
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                className="w-6 h-6"
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccentureNews;
