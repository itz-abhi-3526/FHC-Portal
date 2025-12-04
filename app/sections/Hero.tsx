"use client";
import React from "react";
import { motion } from "framer-motion";
import { inter } from "../fonts/inter";
import HeroBackground from "../components/background/HeroBackground";

const titleText = "Imagine. Build. Impact.";

// container animation
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

// per-character animation
const charAnim = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 28 },
  },
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero"
      role="banner"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex w-full items-center justify-center px-6">
        <div
          className={`${inter.className} z-20 w-full max-w-[1050px]`}
          style={{ WebkitFontSmoothing: "antialiased" }}
        >
          {/* Screen Reader Fallback */}
          <span className="sr-only">{titleText}</span>

          {/* Animated Text */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={container}
            className="
              mx-auto text-center font-bold tracking-tight text-[#e4ded7]
              text-[32px]
              sm:text-[42px]
              md:text-[56px]
              lg:text-[78px]
              xl:text-[88px]
              leading-[1]
              mb-4
              overflow-visible
            "
          >
            {Array.from(titleText).map((char, index) => {
              const isSpace = char === " ";

              return (
                <motion.span
                  key={index}
                  variants={charAnim}
                  aria-hidden="true"
                  className={`inline-block ${
                    isSpace
                      ? "w-[0.35rem] sm:w-[0.45rem] md:w-[0.55rem] lg:w-[0.65rem]"
                      : ""
                  }`}
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
