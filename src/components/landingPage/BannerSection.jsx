"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

const BannerSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className=" ">
      <div className="relative flex flex-col justify-center md:flex-row gap-8 py-8 md:py-16">
        <video
          ref={videoRef}
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/banner/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="md:w-[60%]">
          <h1 className="relative z-10 text-5xl  uppercase md:text-6xl lg:text-7xl  font-semibold leading-tight mb-10 ">
            <span className="text-left text-white">Together We</span>
            <span className="flex items-center text-white mt-2 justify-end">
              <span>Rein</span>
              <svg
                className="w-8 h-8 md:w-14 md:h-14 text-primary"
                viewBox="0 0 107 118"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M0 118L107 74.4053V43.5947L0 0V30.8107L69.1887 59L0 87.1893V118Z"></path>
              </svg>
              <span>ented</span>
            </span>
          </h1>
        </div>
        <div className=" md:w-[35%]">
          <div className="w-[48px] h-[5px] bg-primary"></div>
          <p className="mt-4 text-white leading-relaxed">
            The supply chains we need, the special effects that wow, the
            stadiums we fill, the food we eat, the clothes we wear, the cars we
            drive, the homes where we live, the holidays we take, the trees we
            grow—together, we can reinvent anything.
          </p>
          <Link href="#" className="mt-6 flex  items-center  text-white  ">
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
      </div>
      <button
        title={isPlaying ? "Pause video" : "Play video"}
        onClick={toggleVideoPlayback}
        className=" "
      >
        {isPlaying ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
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
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 19V5L17 12L6 19Z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default BannerSection;
