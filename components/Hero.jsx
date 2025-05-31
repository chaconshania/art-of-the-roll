import { div } from "motion/react-client";
import React from "react";

export const Hero = ({ title, description }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#FFF7E7]">
      <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 max-w-6xl px-4 gap-2">
        <div className="flex flex-col justify-center items-start px-4">
          <h1 className="mb-4 text-6xl font-semibold md:text-8xl">{title}</h1>
          <p className="text-sm md:text-base">{description}</p>
          <button className="mt-6 flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black md:text-lg bg-[#F18F06]">
            Support Us!
          </button>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
