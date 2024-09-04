"use client";
import React from "react";

const ReinventionStart = () => {
  return (
    <div className="   bg-[#F2F2F2]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-12 gap-12 py-8 md:py-16  px-8  max-w-screen-xl mx-auto    items-center">
        <div>
          <h2 className="text-5xl font-bold text-black mb-12">
            Reinvention starts here
          </h2>
          <p className="mb-6 text-lg">
            Advances in digital technologies, data and AI are changing
            everything. How you compete. How you define and deliver value. Even
            how you transform to be the next best version of yourself.
          </p>
          <p className="mb-6 text-lg">
            These advances have never been more critical, nor more necessary.
            That&apos;s because unprecedented uncertainty and volatility call for
            businesses in every industry to activate new levels of innovation
            and launch rapid transformations that only digital technologies can
            make possible.
          </p>
          <p className="mb-6 text-lg">
            In short, today&apos;s business environment demands total enterprise
            reinvention.
          </p>
          <p className="mb-6 text-lg">
            Accenture stands ready to provide the strategy and consulting
            support for you to navigate this reinvention journey. We bring
            functional and industry expertise, unparalleled insights, actionable
            recommendations, and the commitment and know-how to unlock 360°
            value across your organizations. We manage complexity. And we help
            you become faster, more innovative and more resilient.
          </p>
          <p className="mb-6 text-lg">
            Along the way, we deliver what matters most: results.
          </p>
          <blockquote className="mt-6 border-l-4 border-primary pl-4  text-black text-4xl mb-6">
            It&apos;s reinvention that&apos;s designed for you. And it starts here.
          </blockquote>
        </div>

        <div className="">
          <video loop controls muted className="object-cover w-full h-[400px] ">
            <source
              src="https://dynamicmedia.accenture.com/is/content/accenture/final/capabilities/strategy-and-consulting/strategy/video/Accenture-Strategy-and-Consulting-Banner-v4.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p className="font-bold text-black text-3xl mt-4 mb-2">
            Reinvention starts here
          </p>
          <a href="#" className="text-primary hover:text-gray hover:underline">
            View Transcript
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReinventionStart;
