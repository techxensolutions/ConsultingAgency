"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

const CareersSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
    <div className=" py-8 md:py-16 ">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-1/2">
          <div className="relative">
            <video ref={videoRef} loop muted className="w-full h-auto ">
              <source
                src="https://www.accenture.com/content/dam/system-files/acom/custom-code/change-more/media/Accenture-Cut-Video-1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button
              title={isPlaying ? "Pause video" : "Play video"}
              onClick={toggleVideoPlayback}
              className="absolute bottom-6 left-6 "
            >
              {isPlaying ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5V19H14V5H8ZM0 5V19H6V5H0Z"></path>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 19V5L17 12L6 19Z"></path>
                </svg>
              )}
            </button>
          </div>

          <img
            alt=""
            className="w-full h-auto"
            src="https://dynamicmedia.accenture.com/is/content/accenture/Added%20Media-1?ts=1725260344523&dpr=off"
          />
        </div>

        <div className="md:w-1/3 md:pl-8">
          <h2 className="text-4xl font-bold text-white">
            Grow your career at the heart of change
          </h2>
          <p className="text-white text-2xl mt-2">
            It's your time to shine. Bring your ingenuity, curiosity and big
            ideas.
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
    </div>
  );
};

export default CareersSection;
