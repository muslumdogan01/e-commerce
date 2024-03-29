import React from "react";

const SummerSales = () => {
  return (
    <div className="relative w-[22.500rem] md:w-[18.875rem] font-semibold h-[22rem] bg-[#84bc22] justify-around items-center rounded-xl flex flex-col ">
      <h1 className="text-8xl  text-white">55%</h1>
      <h1 className="text-2xl text-white text-center">
        Summer <br /> Sales
      </h1>
      <img className="absolute left-0 bottom-0" src="/holidays.png" alt="" />
    </div>
  );
};

export default SummerSales;
