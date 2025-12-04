// src/components/hero/Tools.tsx
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaTools,
  FaProjectDiagram,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const features = [
  {
    id: "events",
    title: "Event Page",
    icon: <FaCalendarAlt />,
    desc:
      "Browse upcoming seminars, hackathons, talks, and club events — RSVP, see schedules, and get event details in one place.",
  },
  {
    id: "byte",
    title: "BYTE",
    icon: <FaChalkboardTeacher />,
    desc:
      "BYTE — structured, tech-focused sessions run by seniors for juniors. Learn real-world skills, from core concepts to advanced tooling.",
  },
  {
    id: "workshops",
    title: "Workshops",
    icon: <FaTools />,
    desc:
      "Hands-on workshops with step-by-step labs and resources to help you build practical projects and strengthen your portfolio.",
  },
  {
    id: "projects",
    title: "Projects",
    icon: <FaProjectDiagram />,
    desc:
      "Collaborate on team projects, find contributors, track progress, and publish outcomes — ideal for learning by building together.",
  },
  {
    id: "competitions",
    title: "Competitions",
    icon: <FaTrophy />,
    desc:
      "Participate in coding contests, design sprints, and challenges organized through the portal — compete, learn, and win rewards.",
  },
  {
    id: "community",
    title: "Community",
    icon: <FaUsers />,
    desc:
      "Connect with mentors, find study groups, share resources, and grow together in a supportive student-led community.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.98,
  }),
};

const ToolsCarousel: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const index = ((page % features.length) + features.length) % features.length;
  const touchStartX = useRef<number | null>(null);

  const paginate = useCallback((newDirection: number) => {
    setPage(([p]) => [p + newDirection, newDirection]);
  }, []);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  // touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40; // px
    if (diff > threshold) paginate(-1);
    if (diff < -threshold) paginate(1);
    touchStartX.current = null;
  };

  return (
    <section
      id="tools"
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-12 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-32"
      aria-label="FHC Portal features"
    >
      <div className="mx-auto flex w-[94%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        {/* Title */}
        <AnimatedTitle
          text={"FHC PORTAL"}
          className={
            "mb-6 text-left text-[48px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-10 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        {/* Carousel viewport */}
        <div
          className="relative w-full max-w-[1100px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Card viewport with responsive height */}
          <div
            className="mx-auto overflow-visible rounded-xl"
            style={{ minHeight: 200 }}
            aria-roledescription="carousel"
          >
            <AnimatePresence custom={direction} initial={false}>
              <motion.article
                key={features[index].id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative mx-auto w-full max-w-[900px] rounded-lg bg-[rgba(255,255,255,0.02)] p-4 md:p-6 shadow-sm"
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-[rgba(255,255,255,0.03)] text-[#e4ded7]">
                    {/* responsive icon size */}
                    {React.cloneElement(features[index].icon as React.ReactElement, {
                      size: 28,
                      className: "md:text-[36px]",
                    })}
                  </div>
                  <h3 className="text-[16px] md:text-[20px] font-bold text-[#e4ded7]">
                    {features[index].title}
                  </h3>
                </div>

                <p className="text-[14px] md:text-[15px] text-[#d7d0c7] leading-relaxed flex-1">
                  {features[index].desc}
                </p>

                <div className="flex items-center justify-between">
                  {/* Numeric indicator only (1, 2, ...) */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#bdb6ae]">{index + 1}</span>
                  </div>

                  {/* decorative dots (only visible on md+) */}
                  <div className="hidden md:flex items-center gap-2 text-sm text-[#bdb6ae]">
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#bdb6ae]" />
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#bdb6ae]" />
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls: Prev / Next (bigger tap targets on mobile) */}
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-2">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous feature"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] p-2 text-[#e4ded7] shadow hover:bg-[rgba(255,255,255,0.06)] md:p-3"
            >
              <svg
                className="h-5 w-5 md:h-6 md:w-6"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path d="M12 16L6 10l6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => paginate(1)}
              aria-label="Next feature"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] p-2 text-[#e4ded7] shadow hover:bg-[rgba(255,255,255,0.06)] md:p-3"
            >
              <svg
                className="h-5 w-5 md:h-6 md:w-6"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i - index])}
                aria-label={`Go to feature ${i + 1}`}
                className={`h-2 w-8 rounded-full transition-all ${
                  i === index ? "bg-[#e4ded7]" : "bg-[rgba(255,255,255,0.06)]"
                }`}
              />
            ))}
          </div>

          {/* Single CTA button below the carousel */}
          <div className="mt-6 flex w-full items-center justify-center">
            <Link
              href="https://fhc-portal-fe.vercel.app/auth"
              className="inline-flex items-center gap-2 rounded-md bg-[#e4ded7] px-6 py-3 text-sm font-semibold text-[#0E1016] shadow hover:brightness-95"
            >
              Unlock FHC Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
