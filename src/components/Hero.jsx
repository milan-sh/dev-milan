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
            {Array.from("MERN").map((letter, index) => (
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
            {Array.from("STACK").map((letter, index) => (
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
        <div className="about font-poppings font-normal leading-tight tracking-tight text-secondaryTextColor md:p-4 md:w-2/4 sm:w-3/4 ">
          <div>
            <p className="leading-tight">
              <span className="text-primaryTextColor mr-2">ABOUT</span>I build
              high-performance fullstack web applications, crafting{" "}
              <span className="text-hoverBg">scalable solutions</span> with
              clean architecture. Passionate about delivering{" "}
              <span className="text-hoverBg">intuitive interfaces </span>
              and{" "}
              <span className="text-hoverBg">
                optimized backend systems
              </span>{" "}
              for seamless user experiences.
            </p>
          </div>
          <div className=" xl:flex sm:hidden hidden justify-between items-center mt-6 lg:hidden md:hidden">
            <p className="text-primaryTextColor">Scroll down</p>
            <img className="size-7" src="./icons8-down.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
