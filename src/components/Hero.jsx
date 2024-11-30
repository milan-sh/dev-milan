import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".fe", {
      opacity: 0,
      duration: 0.4,
      delay: 0.6,
      y: 400,
    });
    tl.from(".devloper", {
      opacity: 0,
      duration: 0.3,
      y: 120,
    });
    tl.from(
      ".about",
      {
        opacity: 0,
        duration: 0.3,
        y: 120,
      },
      "-=0.2"
    );
  });

  return (
    <div className="bg-primaryBg   p-4 md:p-10">
      <div className="overflow-y-hidden pr-2">
        <div className="fe flex justify-between items-center flex-wrap font-bebas text-primaryTextColor xl:text-xlHeading lg:text-lgHeading md:text-mdHeading sm:text-smHeading text-mobileHeading xl:leading-[16rem] lg:leading-[14rem] md:leading-[12rem] sm:leading-[10rem] leading-[9rem]">
          <h1 className="tracking-tighter">
            {Array.from("FRONT").map((letter, index) => (
              <span
                key={index}
                className="hover:text-secondaryTextColor inline-block"
              >
                {letter}
              </span>
            ))}
          </h1>
          <h1 className="tracking-tighter">——</h1>
          <h1 className="tracking-tighter">
            {Array.from("END").map((letter, index) => (
              <span key={index} className="hover:text-secondaryTextColor">
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-start gap-x-14 md:flex-col sm:flex-col lg:flex-col xl:flex-row flex-col">
        <h1 className="devloper font-bebas text-primaryTextColor xl:text-xlHeading lg:text-lgHeading md:text-mdHeading sm:text-smHeading text-[7rem] tracking-tighter xl:leading-[16rem] lg:leading-[14rem] md:leading-[12rem] sm:leading-[10rem] leading-[9rem] flex sm:flex-wrap flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
          {Array.from("DEVELOPER").map((letter, index) => (
            <span key={index} className="hover:text-secondaryTextColor">
              {letter}
            </span>
          ))}
        </h1>
        <div className="about font-robot text-secondaryTextColor md:p-4 md:w-2/4 sm:w-3/4 ">
          <div>
            <p className="leading-tight">
              <span className="text-primaryTextColor mr-2">ABOUT</span>I am a
              passionate Frontend Developer based in New Delhi, India,
              specializing in crafting dynamic, responsive, and visually
              stunning websites. With a focus on seamless functionality and
              interactive user experiences, I aim to deliver impactful digital
              solutions that stand out.
            </p>
          </div>
          <div className=" xl:flex sm:hidden hidden justify-between items-center mt-5 lg:hidden md:hidden">
            <p className="text-primaryTextColor">Scroll down</p>
            <img className="size-7" src="./icons8-down.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
