import Link from "next/link";
import React from "react";

const LandingLinkCard = () => {
  const data = [
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
    {
      title: "Case Study",
      heading: "Turning years of data into instant insights: Fortune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Tile_Fortune%3Arad-card-full?ts=1721906754717&fit=constrain&dpr=off",
    },
  ];
  return (
    <div className=" py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative overflow-hidden group transform transition duration-300 hover:scale-110">
              <img
                className="w-full h-[430px] object-cover transition-all duration-300 group-hover:translate-y-full"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-transparent transition-all duration-300  group-hover:bg-opacity-70">
                <p className="p-4 text-white text-md">{item.title}</p>
                <p className="px-4 text-white text-lg leading-tight">
                  {item.heading}
                </p>
                <div className="transform transition-all duration-300 group-hover:translate-x-0 translate-x-full">
                  <p className="px-4 text-white text-sm mt-8  ">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 duration-300 transition-transform transform translate-y-12 group-hover:translate-y-0">
                  <Link
                    href={item.link}
                    className="relative text-white  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:h-[3px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:h-[3px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-0"
                  >
                    <span> Expand</span>
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
        ))}
      </div>
    </div>
  );
};

export default LandingLinkCard;
