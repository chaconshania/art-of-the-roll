import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#E94324] px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-7xl">
            Roll <br /> with us!
          </h2>
        </div>

        <div>
          <h3 className="text-xl font-medium">Location</h3>
          <h4>
            1 University Pl <br />
            Stamford, CT 06901
          </h4>
        </div>

        <div>
          <h3 className="text-xl font-medium">Stay Connected</h3>
          <ul className="space-y-1">
            <li>LinkedIn</li>
            <li>Email</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium">Explore</h3>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Documentary</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
