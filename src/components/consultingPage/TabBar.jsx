import React from "react";

const TabBar = () => {
  return (
    <div className="bg-[#F2F2F2] w-full flex flex-wrap items-center gap-8  px-8 border-t-2 border-b-2 border-[#E3E3E3]">
      <div className="relative group cursor-pointer">
        <span className="block py-3">Reinvention Starts Here</span>
        <span className="absolute -bottom-1.5 left-0 w-0 h-[5px] bg-[#00BAFF] transition-all duration-300 group-hover:w-full"></span>
      </div>

      <div className="relative group cursor-pointer">
        <span className="block py-3">Reinventing Across Industries</span>
        <span className="absolute -bottom-1.5 left-0 w-0 h-[5px] bg-[#00BAFF] transition-all duration-300 group-hover:w-full"></span>
      </div>

      <div className="relative group cursor-pointer">
        <span className="block py-3">
          {" "}
          The Advantage of a Total Enterprise Approach to Reinvention
        </span>
        <span className="absolute -bottom-1.5 left-0 w-0 h-[5px] bg-[#00BAFF] transition-all duration-300 group-hover:w-full"></span>
      </div>

      <div className="relative group cursor-pointer">
        <span className="block py-3">What We Think</span>
        <span className="absolute -bottom-1.5 left-0 w-0 h-[5px] bg-[#00BAFF] transition-all duration-300 group-hover:w-full"></span>
      </div>
    </div>
  );
};

export default TabBar;
