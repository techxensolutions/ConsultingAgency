"use client";
import React, { useRef, useState } from "react";

const ConsultingBanner = () => {
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
    <>
      <div className="relative">
        <video
          ref={videoRef}
          loop
          muted
          className="object-cover w-full h-[350px] "
        >
          <source
            src="https://dynamicmedia.accenture.com/is/content/accenture/final/capabilities/strategy-and-consulting/strategy/video/Accenture-Strategy-and-Consulting-Banner-v4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute  left-10 top-10">
          <h2 className="text-6xl font-bold text-white">
            Strategy & Consulting
          </h2>
        </div>
        <div className="absolute  right-5 bottom-5">
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
                className="w-6 h-6"
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
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 19V5L17 12L6 19Z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ConsultingBanner;
