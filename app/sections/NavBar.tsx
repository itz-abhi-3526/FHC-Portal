"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href.split("#")[1];
    window.scrollTo({
      top: document.getElementById(href)?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 mx-auto flex items-center justify-center text-[#e4ded7]">
      <Container
        width="130%"
        height="60px"
        color="rgba(255, 255, 255, 0.1)"
        borderRadius={10}
        top="0px"
        left="0px"
        angle={0}
      >
        <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-lg sm:w-[383.3px] lg:w-[391.3px]">
          <Link
            href="#home"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Home Section"
          >
            <h4 className="px-2 py-2 text-[12px] sm:px-4 sm:text-[14px] md:text-[14px]">
              HOME
            </h4>
          </Link>

          <Link
            href="#about"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to About Section"
          >
            <h4 className="px-2 py-2 whitespace-nowrap text-[14px] sm:px-4 sm:text-[14px] md:text-[14px]">
              ABOUT FHC
            </h4>
          </Link>

          <Link
            href="#tools"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Tools Section"
          >
            <h4 className="px-2 py-2 whitespace-nowrap text-[14px] sm:px-4 sm:text-[14px] md:text-[14px]">
              FHC PORTAL
            </h4>
          </Link>

          <Link
            href="#contact"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Contact Section"
          >
            <h4 className="px-2 py-2 text-[12px] sm:px-4 sm:text-[14px] md:text-[14px]">
              CONTACT
            </h4>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
