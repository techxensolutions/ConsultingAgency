import React from "react";

const SongSection = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className=" md:px-12 gap-12 py-8   px-8  max-w-screen-xl mx-auto ">
        <p className="mb-4 text-md">
          We work as one team with diverse expertise to create 360° value.
        </p>
        <div className=" py-8">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="flex gap-4 items-center">
              <img
                alt="Song"
                src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Interactive-105x105px?qlt=85&wid=320&ts=1716298120242&fit=constrain&dpr=off"
                className="w-28 h-28 "
              />
              <h3 className="text-2xl font-bold">Song</h3>
            </div>
            <div className="flex gap-4 items-center">
              <img
                alt="Operations"
                src="https://dynamicmedia.accenture.com/is/image/accenture/accenture-industry-x-services-400x400?qlt=85&wid=320&ts=1716298120280&fit=constrain&dpr=off"
                className="w-28 h-28 "
              />
              <h3 class="text-2xl font-bold">Operations</h3>
            </div>
            <div class="flex gap-4 items-center">
              <img
                alt="Technology"
                src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Operations-105x105px?qlt=85&wid=320&ts=1716298120268&fit=constrain&dpr=off"
                className="w-28 h-28 "
              />
              <h3 class="text-2xl font-bold">Technology</h3>
            </div>
            <div class="flex gap-4 items-center">
              <img
                alt="Industry X"
                src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Interactive-105x105px?qlt=85&wid=320&ts=1716298120242&fit=constrain&dpr=off"
                className="w-28 h-28 "
              />
              <h3 class="text-2xl font-bold">Industry X</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongSection;
