import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden py-16 md:py-20 lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                
                {/* CONTACT Heading */}
                <div
                    className={`flex flex-col items-center justify-center ${inter.className} w-full lg:max-w-[1440px]`}
                >
                    <AnimatedWords
                        title="CONTACT"
                        style="
                            flex items-center justify-center
                            text-center uppercase font-extrabold leading-[0.9em]
                            text-[#e4ded7]
                            text-[70px]
                            sm:text-[120px]
                            md:text-[150px]
                            lg:text-[160px]
                            xl:text-[220px]
                            max-w-full break-words
                        "
                    />
                </div>

                {/* Content + Socials */}
                <div className="mt-16 flex w-full flex-col items-center justify-center gap-16 sm:gap-20 md:flex-row md:items-start md:justify-between lg:max-w-[1440px]">
                    
                    {/* Description Text */}
                    <div className="w-[90%] sm:w-[380px] md:w-[350px] lg:w-[420px] text-[#e4ded7] text-center md:text-left font-semibold uppercase text-[14px] sm:text-[15px] md:text-[16px]">
                        <AnimatedBody
                            text="Got a question, proposal, project, or want to work together on something? Feel free to reach out to us!"
                            className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-10 sm:gap-14 md:gap-10 lg:gap-20 items-center text-[#e4ded7]">
                        
                        {/* Instagram */}
                        <Link
                            href="https://www.instagram.com/fisathorizon?igsh=MWg0Zmp0N3lxc3FxMg=="
                            target="_blank"
                            aria-label="Instagram Profile"
                        >
                            <AnimatedTitle
                                text="INSTAGRAM"
                                className="
                                    text-[20px]
                                    sm:text-[24px]
                                    md:text-[20px]
                                    lg:text-[28px]
                                    whitespace-nowrap
                                    inline-block
                                    text-[#e4ded7]
                                "
                                wordSpace="mr-[0.18em]"
                                charSpace="mr-[0.01em]"
                            />
                        </Link>

                        {/* LinkedIn */}
                        <Link
                            href="https://www.linkedin.com/company/fisat-horizon/"
                            target="_blank"
                            aria-label="LinkedIn Profile"
                        >
                            <AnimatedTitle
                                text="LINKEDIN"
                                className="
                                    text-[20px]
                                    sm:text-[24px]
                                    md:text-[20px]
                                    lg:text-[28px]
                                    whitespace-nowrap
                                    inline-block
                                    text-[#e4ded7]
                                "
                                wordSpace="mr-[0.18em]"
                                charSpace="mr-[0.01em]"
                            />
                        </Link>

                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
