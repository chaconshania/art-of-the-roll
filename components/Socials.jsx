import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Socials() {
  return (
    <div className="hidden lg:flex fixed inset-y-0 right-5 items-center z-1">
      <div className="flex flex-col gap-1 bg-[#FFF7E7]/75 px-2 py-4 rounded-full">
        <div className="flex justify-center items-center">
          <p className="[writing-mode:vertical-lr]">Follow us - </p>
        </div>
        <a href="https://www.instagram.com/artoftherollproject/">
          <div className="bg-[#F3911E] rounded-full flex justify-center p-4">
            <AiFillInstagram className="text-lg" />
          </div>
        </a>
        <a href="https://www.linkedin.com/company/art-of-the-roll/">
          <div className="bg-[#F3911E] rounded-full flex justify-center p-4">
            <FaLinkedinIn className="text-lg" />
          </div>
        </a>
        <a href="https://www.tiktok.com/@art.of.the.roll">
          <div className="bg-[#F3911E] rounded-full flex justify-center p-4">
            <FaTiktok className="text-lg" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Socials;
