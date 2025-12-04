"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NavBar: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const href = e.currentTarget.href.split("#")[1];
    const el = document.getElementById(href);
    if (el) {
      const top = el.offsetTop;
      window.scrollTo({ top, left: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center px-4"
    >
      <Container
        width="auto"
        height="auto"
        color="rgba(255, 255, 255, 0.06)"
        borderRadius={12}
        top="0px"
        left="0px"
        angle={0}
      >
        {/* inner wrapper: keep compact, single-line, scrollable on tiny screens */}
        <div className="mx-auto max-w-[420px] w-full">
          <div className="flex items-center justify-center">
            <div className="flex w-full items-center justify-center gap-2 overflow-x-auto whitespace-nowrap px-2 py-1 scrollbar-none">
              {/* Buttons are nicer for accessibility and consistent sizing */}
              <Link
                href="#home"
                onClick={handleScroll}
                data-blobity-magnetic="false"
                aria-label="Scroll to Home Section"
                className="inline-flex min-w-[64px] items-center justify-center rounded px-3 py-2 text-center text-[12px] font-semibold text-[#e4ded7] hover:bg-[rgba(255,255,255,0.03)]"
              >
                HOME
              </Link>

              <Link
                href="#about"
                onClick={handleScroll}
                data-blobity-magnetic="false"
                aria-label="Scroll to About Section"
                className="inline-flex min-w-[80px] items-center justify-center rounded px-3 py-2 text-center text-[13px] font-semibold text-[#e4ded7] hover:bg-[rgba(255,255,255,0.03)]"
              >
                ABOUT FHC
              </Link>

              <Link
                href="#tools"
                onClick={handleScroll}
                data-blobity-magnetic="false"
                aria-label="Scroll to Tools Section"
                className="inline-flex min-w-[88px] items-center justify-center rounded px-3 py-2 text-center text-[13px] font-semibold text-[#e4ded7] hover:bg-[rgba(255,255,255,0.03)]"
              >
                FHC PORTAL
              </Link>

              <Link
                href="#contact"
                onClick={handleScroll}
                data-blobity-magnetic="false"
                aria-label="Scroll to Contact Section"
                className="inline-flex min-w-[64px] items-center justify-center rounded px-3 py-2 text-center text-[12px] font-semibold text-[#e4ded7] hover:bg-[rgba(255,255,255,0.03)]"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
