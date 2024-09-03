"use client";

import Link from "next/link";
import { title } from "process";
import React, { useEffect, useState } from "react";

const silderValue = [
  {
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Smart-Image%3Arad-3x2?ts=1725260344128&fit=constrain&dpr=off",
    title: " Elevating the luxury shopping experience",
    desc: " Prada Group's composable commerce approach helps customers complete checkouts blazingly fast and get the luxurious experience they expect.",
    link: "/1",
  },
  {
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Prada-Image%3Arad-3x2?ts=1725260344059&fit=constrain&dpr=off",
    title: "Car buying in hyperdrive",
    desc: "Smart reinvented traditional auto sales with a direct-to-consumer platform that unifies online and offline experiences and reflects the circuitous way people make purchases.",
    link: "/1",
  },
  {
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Smart-Image%3Arad-3x2?ts=1725260344128&fit=constrain&dpr=off",
    title: " Elevating the luxury shopping experience",
    desc: " Prada Group's composable commerce approach helps customers complete checkouts blazingly fast and get the luxurious experience they expect.",
    link: "/1",
  },
  {
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Prada-Image%3Arad-3x2?ts=1725260344059&fit=constrain&dpr=off",
    title: "Car buying in hyperdrive",
    desc: "Smart reinvented traditional auto sales with a direct-to-consumer platform that unifies online and offline experiences and reflects the circuitous way people make purchases.",
    link: "/1",
  },
  {
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Smart-Image%3Arad-3x2?ts=1725260344128&fit=constrain&dpr=off",
    title: " Elevating the luxury shopping experience",
    desc: " Prada Group's composable commerce approach helps customers complete checkouts blazingly fast and get the luxurious experience they expect.",
    link: "/1",
  },
  {
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Prada-Image%3Arad-3x2?ts=1725260344059&fit=constrain&dpr=off",
    title: "Car buying in hyperdrive",
    desc: " Prada Group's composable commerce approach helps customers complete checkouts blazingly fast and get the luxurious experience they expect.",
    link: "/1",
  },
  {
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Smart-Image%3Arad-3x2?ts=1725260344128&fit=constrain&dpr=off",
    title: " Elevating the luxury shopping experience",
    desc: "Smart reinvented traditional auto sales with a direct-to-consumer platform that unifies online and offline experiences and reflects the circuitous way people make purchases.",
    link: "/1",
  },
];
const ValueSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prevSlide) =>
      prevSlide === silderValue.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? silderValue.length - 1 : prevSlide - 1
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
      <div className=" text-white  text-center">
        <h1 className="text-6xl md:text-8xl font-bold">360° VALUE</h1>
        <p className="text-2xl mt-6 max-w-3xl mx-auto">
          Every day, we embrace change and create value for all our
          stakeholders, in every part of the world.
        </p>
        <Link
          href="#"
          className="mt-6 flex justify-center  items-center  text-white  "
        >
          <span className="mr-3 font-bold"> See what we do</span>
          <span className="w-6 h-6 flex justify-center items-center bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="w-3.5 h-3.5 "
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </span>
        </Link>
      </div>

      <div>
        <div
          className={`w-full  flex md:flex-nowrap flex-wrap my-8 items-end justify-center transform transition-transform duration-700 ease-in-out ${
            direction === "right" ? "" : ""
          }`}
        >
          <img
            src={silderValue[currentSlide].img}
            alt={silderValue[currentSlide].title}
            className="w-full md:w-1/2 h-auto "
          />
          <div className="w-full md:w-1/2 pl-6 pb-5 mt-3">
            <h2 className="text-2xl font-bold text-white">
              {silderValue[currentSlide].title}
            </h2>
            <p className="mt-2 text-white">{silderValue[currentSlide].desc}</p>
            <Link href={silderValue[currentSlide].link}>
              <p className="mt-8 flex items-center text-white">
                <span className="mr-3 font-bold">Read more</span>
                <span className="w-6 h-6 flex justify-center items-center bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                </span>
              </p>
            </Link>
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
            <span className="text-white">
              {" "}
              {currentSlide + 1}/{silderValue.length}
            </span>
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

export default ValueSlider;
