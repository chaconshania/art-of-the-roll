import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

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
      <div className="h-screen bg-black" />
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
        background: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
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
            <span>Learn more</span>
          </a>
        </div>
        <div className="flex flex-col justify-center items-start"></div>
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
      "Art of the Roll is more than a world-record attempt—it’s a celebration of collaboration and creativity. We’re uniting Stamford’s students, residents, and local organizations to create something memorable. This mosaic will stand as a symbol of our collective spirit, creativity, and determination. By breaking the record, we will celebrate the innovative spirit of Stamford, CT and its community, leave a lasting artistic legacy for future generations to enjoy, and foster a greater sense of community pride and teamwork in Stamford.",
    ctaClasses: "bg-violet-300",
    routeTo: "#",
  },
  {
    id: 2,
    title: "What Will Our Project Achieve?",
    description:
      "The project aims to invigorate the Stamford Campus by encouraging students, faculty, and staff to work together in a collaborative effort. Through friendly competition and creative collaboration with other regional campuses, we seek to develop a compelling design for the final art piece. This initiative also provides Stamford DMD students with a valuable opportunity to strengthen their portfolios, as we plan to thoroughly document the design and creation process. Ultimately, the project will highlight the creative talent within the Stamford Art Association and may even attract new members and artists, enriching the cultural landscape of the city of Stamford.",
    ctaClasses: "bg-pink-300",
    routeTo: "#",
  },
  {
    id: 3,
    title: "Use your existing tools",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-red-300",
    routeTo: "#",
  },
  {
    id: 4,
    title: "Customers love us",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
];
