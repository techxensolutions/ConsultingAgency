import React from "react";

const Advantage = () => {
  const advantages = [
    {
      title: "Bold strategic vision",
      description:
        "Partner with us to define and answer your most strategic business questions.",
      linkText: "Learn more",
      linkUrl: "#",
    },
    {
      title: "Talent",
      description:
        "Unlock human potential and transform organizational structure and culture.",
      linkText: "Learn more",
      linkUrl: "#",
    },
    {
      title: "Finance",
      description:
        "Broaden financial capabilities and impact across the enterprise.",
      linkText: "Learn more",
      linkUrl: "#",
    },
    {
      title: "Marketing, sales and service",
      description: "Enable seamless, personalized and intuitive experiences.",
      linkText: "Learn more",
      linkUrl: "#",
    },
    {
      title: "Supply chain and operations",
      description:
        "Digitally reinvent and optimize supply chain and operations.",
      linkText: "Learn more",
      linkUrl: "#",
    },
    {
      title: "Technology strategy and advisory",
      description: "Realize exceptional business value from technology.",
      linkText: "Learn more",
      linkUrl: "#",
    },
    {
      title: "Data and AI-powered...",
      description:
        "Scale AI, analytics and automation – and the data that fuels it all – for insights.",
      linkText: "Learn more",
      linkUrl: "#",
    },
    {
      title: "Continuous innovation",
      description:
        "Move from research to results with world-class innovation that keeps you on the cutting-edge of change.",
      linkText: "Learn more",
      linkUrl: "#",
    },
  ];

  return (
    <div className=" max-w-screen-xl mx-auto my-8 md:my-16 px-8  md:px-12">
      <h1 className="md:text-5xl text-4xl font-bold mb-8">
        The advantage of a total <br />
        enterprise approach to <br /> reinvention
      </h1>
      <p className="text-lg text-black mb-8">
        We believe every organization improves with an approach informed by a
        deep understanding of all <br /> key functions and how they can work
        together more effectively.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className=" relative bg-[#F2F2F2] p-6  border border-[#CCCCCC]"
          >
            <div className="absolute -right-4 top-3">
              <img
                src="/banner/arrow.png"
                alt=""
                className="w-14 h-12 cursor-pointer"
              />
            </div>
            <h2 className="text-2xl font-extrabold mb-6">{advantage.title}</h2>
            <p className="text-black mb-4">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
