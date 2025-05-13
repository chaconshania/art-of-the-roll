import { div } from "motion/react-client";
import React from "react";

export const Hero = ({ title, description }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 bg-[#FFF7E7]">
      <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 max-w-6xl px-4 gap-2">
        <div className="flex flex-col justify-center items-start px-4">
          <h1 className="mb-4 text-6xl font-semibold md:text-8xl">{title}</h1>
          <p className="text-sm md:text-base">{description}</p>
          <button>Become a Sponsor!</button>
        </div>
        <div className="grid grid-cols-2 px-4">
          <image></image>
          <image></image>
          <image></image>
          <image></image>
        </div>
      </div>
    </div>
  );
};
