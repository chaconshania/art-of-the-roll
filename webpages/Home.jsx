import React from "react";
import { StickyCards } from "/components/StickyCards";
import { Hero } from "/components/Hero";
import Socials from "../components/Socials";

import Example from "../components/Navbar";

function Home() {
  return (
    <div>
      <Example />
      <Socials />
      <Hero
        title="Roll with Us!"
        description="UConn, partnered with Design with Dice (JohnnyFaceOff), in a mission to create the largest dice mosaic ever and breaking a Guinness World Record right here at Stamford! Be part of history and donate to join the roll!"
      />
      <StickyCards />
      {/* Roles and responsibilities*/}
      {/* What's the language */}
    </div>
  );
}

export default Home;
