import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"About FHC"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="FISAT HORIZON CLUB is a student driven tech community dedicated to empowering learners through hands-on experience, workshops, and industry-ready skills. Founded by students with a passion for sharing knowledge, FHC has grown into one of FISAT's most active and recognized tech clubs - promoting innovation, collaboration, and continuous learning across all domains of Computer Science." />

                        <AnimatedBody
                            delay={0.1}
                            text="Our mission is to empower individuals by providing comprehensive training and hands-on experience in cutting-edge technologies across all domains of Computer Science. We strive to foster a learning environment that promotes innovation, collaboration, and professional growth."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="To be a leading technology development club recognized for advancing knowledge and skills in computer science, creating a community of tech enthusiasts who drive technological progress and make a positive impact on the industry."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
