"use client";
import React from "react";
import { motion } from "framer-motion";
import { inter } from "../fonts/inter"; // adjust path if needed
import HeroBackground from "../components/background/HeroBackground";
const titleText = "Imagine. Build. Impact.";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.12,
    },
  },
};

const charAnim = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero"
      role="banner"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible"
    >
      {/* Background placed behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex w-full items-center justify-center px-6">
        <div
          className={`${inter.className} z-20 w-full max-w-[1100px]`}
          style={{ WebkitFontSmoothing: "antialiased" }}
        >
          {/* Accessible textual fallback for screen readers */}
          <span className="sr-only">Imagine. Build. Impact.</span>

          {/* Animated headline (per-character) */}
          <motion.h1
            aria-hidden={false}
            initial="hidden"
            animate="show"
            variants={container}
            className="mb-1 mx-auto text-center text-[40px] font-bold leading-[0.95] tracking-tight text-[#e4ded7] sm:text-[45px] md:mb-8 md:text-[60px] lg:text-[80px]"
            style={{ overflow: "visible" }}
          >
            {/* map characters to inline-block motion spans so nothing is absolutely-positioned */}
            {Array.from(titleText).map((char, idx) => {
              // Preserve spaces but render them as thin non-breaking gaps so wrapping is possible
              const isSpace = char === " ";
              return (
                <motion.span
                  key={`${char}-${idx}`}
                  variants={charAnim}
                  className={`inline-block ${isSpace ? "w-[0.38rem] md:w-[0.4rem] lg:w-[0.45rem]" : ""}`}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
