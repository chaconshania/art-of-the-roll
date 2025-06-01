import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import PostCarousel from "./PostCarousel";

export const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      <div className="h-screen bg-black flex gap-8 w-full px-4 justify-center align-center">
        <div className=" w-full px-4  max-w-6xl text-wrap">
          <h3 className="mb-4 text-4xl font-semibold md:text-6xl text-[#FFF7E7] ">
            Meet the team <br /> that made it possible
          </h3>
          <p className=" text-sm md:text-base text-[#FFF7E7]">
            Art of the Roll is runned by a collaborative team of UConn students
            & alumni, including current students and Husky Art Pack members
            Vivian and Daniela, alongside Digital Media & Design graduates
            Jethro, Shania, and Dorian. Check out their stories and see how they
            contribute to the team!
          </p>
          <PostCarousel />
        </div>
      </div>
    </>
  );
};

const Card = ({ position, card, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "black" : "#FFF7E7",
        color: isOddCard ? "#FFF7E7" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
        <div className="flex flex-col justify-center items-start">
          <h3 className="mb-4 text-4xl font-semibold md:text-6xl">
            {card.title}
          </h3>
          <p className="text-sm md:text-base">{card.description}</p>
          <a
            href={card.routeTo}
            className={`mt-6 flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
              card.ctaClasses
            } ${
              isOddCard
                ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
                : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
            }`}
          >
            <span>{card.buttontxt}</span>
          </a>
        </div>
        <div className="flex flex-col justify-center items-start">
          <img
            className={`rounded-4xl w-full md:h-100 h-full object-cover -translate-x-0.5 -translate-y-0.5 ${
              card.ctaClasses
            } ${
              isOddCard
                ? "shadow-[8px_8px_0px_white]"
                : "shadow-[8px_8px_0px_black]"
            }`}
            src={card.image}
          ></img>
        </div>
      </div>
    </motion.div>
  );
};

const CARD_HEIGHT = window.innerHeight;

const CARDS = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "We’re uniting Stamford’s students, residents, and local organizations to create something memorable. By breaking the record, we will celebrate the innovative spirit of Stamford, CT and its community, leave a lasting artistic legacy for future generations to enjoy, and foster a greater sense of community pride and teamwork in Stamford.",
    ctaClasses: "bg-[#F18F06]",
    routeTo: "#",
    image: "/Images/Team-picture.jpg",
    buttontxt: "Learn more",
  },
  {
    id: 2,
    title: "What Will Our Project Achieve?",
    description:
      "The project aims to invigorate the Stamford Campus by encouraging students, faculty, and staff to work together in a collaborative effort. Through friendly competition and creative collaboration with other regional campuses, we seek to develop a compelling design for the final art piece. Ultimately, the project will highlight the creative talent within the Stamford Art Association and may even attract new members and artists, enriching the cultural landscape of the city of Stamford.",
    ctaClasses: "bg-[#F18F06]",
    routeTo: "#",
    image: "/Images/Ignite-day.PNG",
    buttontxt: "Learn more",
  },
  {
    id: 3,
    title: "Meet the artist behind the project",
    description:
      "Johnny Face Off (of Design with Dice) is an innovative artist who specializes in creating stunning works of art using dice as his primary medium. Johnny Face Off has gained recognition for pushing the boundaries of art. His expertise and unique artistic approach make him the perfect collaborator for Art of the Roll as we aim to break the Guinness World Record for the largest dice mosaic.",
    ctaClasses: "bg-[#F18F06]",
    routeTo: "#",
    image: "/Images/Comp 1.gif",
    buttontxt: "Check out his works",
  },
];
