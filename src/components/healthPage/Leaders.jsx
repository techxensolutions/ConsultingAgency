import React from "react";

const Leaders = () => {
  const leaders = [
    {
      name: "John Doe",
      title: "Senior Managing Director – Global Health Lead",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Rich-Birhanzel-420x420%3Arad-3x4?ts=1720595265898&fit=constrain&dpr=off",
    },
    {
      name: "Jane Smith",
      title: "Managing Director – Technology Lead",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Rich-Birhanzel-420x420%3Arad-3x4?ts=1720595265898&fit=constrain&dpr=off",
    },
    {
      name: "Michael Johnson",
      title: "Director – Operations",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Rich-Birhanzel-420x420%3Arad-3x4?ts=1720595265898&fit=constrain&dpr=off",
    },
    {
      name: "Emily Davis",
      title: "Senior Executive – HR",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Rich-Birhanzel-420x420%3Arad-3x4?ts=1720595265898&fit=constrain&dpr=off",
    },
    {
      name: "William Brown",
      title: "Vice President – Finance",
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Rich-Birhanzel-420x420%3Arad-3x4?ts=1720595265898&fit=constrain&dpr=off",
    },
  ];

  return (
    <div className="my-8 md:my-16">
      <h1 className="text-4xl font-bold text-white mb-12">Our Leaders</h1>
      <div className="flex   flex-wrap">
        <div className="w-0 lg:w-[35%]"></div>
        <div className="w-[100%] lg:w-[60%]">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 ">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="flex gap-6 hover:scale-[1.02] transition-all"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-[125px] h-[165px] object-cover grayscale"
                />
                <div className="flex flex-col">
                  <h4 className="text-white text-xl font-bold">
                    {leader.name}
                  </h4>
                  <p className="text-white text-md mt-2 flex-1">
                    {leader.title}
                  </p>
                  <div className="">
                    <button
                      type="button"
                      className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none text-white outline-none bg-black hover:text-gray"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
