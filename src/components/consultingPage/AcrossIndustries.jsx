import React from "react";

const AcrossIndustries = () => {
  const industries = [
    {
      title: "Communications, Media, & Technology",
      subcategories: [
        "Communications",
        "High Tech",
        "Media",
        "Software & Platforms",
      ],
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Communications-Media-and-Technology-640x384?qlt=85&wid=480&ts=1720595085616&fit=constrain&dpr=off",
    },
    {
      title: "Financial Services",
      subcategories: ["Banking", "Capital Markets", "Insurance"],
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Financial-Services-640x384?qlt=85&wid=480&ts=1720595086413&fit=constrain&dpr=off",
    },
    {
      title: "Products",
      subcategories: [
        "Aerospace & Defense",
        "Automotive",
        "Consumer Goods & Services",
        "Industrial",
        "Life Sciences",
        "Retail",
      ],
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Products-640x384?qlt=85&wid=480&ts=1720595088047&fit=constrain&dpr=off",
    },
    {
      title: "Resources",
      subcategories: ["Chemicals", "Energy", "Natural Resources", "Utilities"],
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Resources-640x384?qlt=85&wid=480&ts=1720595087441&fit=constrain&dpr=off",
    },
    {
      title: "Health and Public Service",
      subcategories: ["Health", "Public Service"],
      image:
        "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Health-and-Public-Services-640x384?qlt=85&wid=480&ts=1720595086642&fit=constrain&dpr=off",
    },
  ];

  return (
    <div className="bg-[#F2F2F2] ">
      <div className="relative max-w-screen-xl mx-auto py-16 px-8  md:px-12">
        <h2 className="md:text-5xl text-4xl font-bold mb-8">
          Reinventing across industries
        </h2>
        <p className="text-lg mb-16">
          We believe total enterprise reinvention requires industry-specific
          knowledge/insights to happen at <br /> the speed required today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 ">
          {industries.map((industry, index) => (
            <div key={index}>
              <div className="bg-white border-t-4 border-primary min-h-[420px]   shadow-lg">
                <div className="flex justify-center ">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-[330px] h-[200px] object-cover   -mt-12"
                  />
                </div>
                <div className="p-6 ">
                  <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
                  <ul className="space-y-1">
                    {industry.subcategories.map((subcategory, idx) => (
                      <li
                        key={idx}
                        className="text-primary underline hover:text-blue-600 cursor-pointer"
                      >
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcrossIndustries;
