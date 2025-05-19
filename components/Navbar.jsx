import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX } from "react-icons/fi";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";

const LINKS = [
  { text: "About", href: "#" },
  { text: "Mission", href: "#" },
  { text: "Documentary", href: "#" },
  { text: "FAQ", href: "#" },
];

const Example = () => {
  return <FlyoutNav />;
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-black transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-[#FFF7E7] py-3 shadow-xl"
          : "bg-[#FFF7E7]/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "black" }) => (
  <div className="flex items-center gap-2">
    <img
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill={color}
      className="w-10"
      src="/Images/littleguy.png"
    ></img>
    <span className="text-2xl font-bold" style={{ color }}>
      Art of the Roll
    </span>
  </div>
);

const Links = () => (
  <div className="flex items-center gap-6">
    {LINKS.map((l) => (
      <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
        {l.text}
      </NavLink>
    ))}
  </div>
);

const NavLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => (
  <div className="flex items-center gap-3">
    <button className="rounded-lg border-2 border-[#EA4324] bg-[#EA4324] px-4 py-2 font-semibold text-white transition-colors hover:border-[#db2000] hover:bg-[#db2000] hover:text-white">
      Become a Sponsor
    </button>
  </div>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-2xl text-black focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-full z-40 w-full overflow-hidden bg-white px-6 py-4 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.text}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-black hover:text-indigo-500"
                >
                  {l.text}
                </a>
              ))}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full rounded-md border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
              >
                Become a Sponsor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Example;
