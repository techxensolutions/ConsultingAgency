"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const data = [
  {
    description:
      "Unlock end-to-end value through insights and accelerated digital transformation with Oracle cloud and enterprise solutions.",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-oracle-logo?qlt=85&ts=1724741873104&&fmt=webp-alpha&dpr=off",
  },
  {
    description:
      "The largest global Microsoft practice. Eighteen-time Microsoft Global Alliance SI Partner of the Year. Powered by Avanade. Runs on Microsoft.",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-microsoft-logo?qlt=85&ts=1724741873160&&fmt=webp-alpha&dpr=off",
  },
  {
    description:
      "Reimagining human experiences that reignite growth and accelerate the path to value.",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1724741873215&&fmt=webp-alpha&dpr=off",
  },
];

const Partners = () => {
  const swiperRef = React.useRef(null);

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="py-8 md:py-16">
      <h1 className="text-4xl font-bold text-white mb-12">
        Partners in change
      </h1>

      <div className="my-12">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-40 h-auto object-cover "
                src={item.image}
                alt={item.title}
              />

              <div className="pr-12">
                <p className=" text-white text-lg   mt-10">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-end gap-6 mt-8">
          <button
            onClick={slidePrev}
            className="bg-secondary text-secondary-foreground p-2 hover:bg-secondary/80"
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
            onClick={slideNext}
            className="bg-secondary text-secondary-foreground p-2 hover:bg-secondary/80"
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
  );
};

export default Partners;
