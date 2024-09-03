"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const data = [
  {
    title: "Case Study",
    heading: "Turning years of data into instant insights: Fortune",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-PruittHealth-Glance-Skim-600x424%3Arad-card-half?ts=1721906737407&fit=constrain&dpr=off",
  },
  {
    title: "Case Study",
    heading: "Turning years of data into instant insights: Fortune",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-PruittHealth-Glance-Skim-600x424%3Arad-card-half?ts=1721906737407&fit=constrain&dpr=off",
  },
  {
    title: "Case Study",
    heading: "Turning years of data into instant insights: Fortune",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-PruittHealth-Glance-Skim-600x424%3Arad-card-half?ts=1721906737407&fit=constrain&dpr=off",
  },
  {
    title: "Case Study",
    heading: "Turning years of data into instant insights: Fortune",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-PruittHealth-Glance-Skim-600x424%3Arad-card-half?ts=1721906737407&fit=constrain&dpr=off",
  },
  {
    title: "Case Study",
    heading: "Turning years of data into instant insights: Fortune",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-PruittHealth-Glance-Skim-600x424%3Arad-card-half?ts=1721906737407&fit=constrain&dpr=off",
  },
  {
    title: "Case Study",
    heading: "Turning years of data into instant insights: Fortune",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-PruittHealth-Glance-Skim-600x424%3Arad-card-half?ts=1721906737407&fit=constrain&dpr=off",
  },
];

const TrendingHealth = () => {
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
      <h1 className="text-4xl font-bold text-white mb-8">
        What’s trending in health
      </h1>
      <Link href="#" className="flex items-center text-white">
        <span className="mr-3 font-bold">View all work</span>
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
      </Link>
      <div className="my-12">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden group transform transition duration-300 hover:scale-110">
                <img
                  className="w-full h-[430px] object-cover transition-all duration-300 group-hover:translate-y-full"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-transparent  transition-all duration-300 group-hover:bg-opacity-70">
                  <p className="p-4 text-white text-md">{item.title}</p>
                  <p className="px-4 text-white text-lg leading-tight">
                    {item.heading}
                  </p>
                  <div className="transform transition-all duration-300 group-hover:translate-x-0 translate-x-full">
                    <p className="px-4 text-white text-sm mt-8">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute bottom-6 right-6 duration-300 transition-transform transform translate-y-12 group-hover:translate-y-0">
                    <Link
                      href={item.link}
                      className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
                    >
                      <span>Expand</span>
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

export default TrendingHealth;
