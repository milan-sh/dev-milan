import React from "react";

function Hero() {
  return (
    <div className="bg-primaryBg  p-4 md:p-10">
      <div className="flex justify-between items-center flex-wrap font-bebas text-primaryTextColor xl:text-xlHeading lg:text-lgHeading md:text-mdHeading sm:text-smHeading text-mobileHeading xl:leading-[16rem] lg:leading-[14rem] md:leading-[12rem] sm:leading-[10rem] leading-[9rem]">
        <h1 className="tracking-tighter">
          {Array.from("FRONT").map((letter, index) => (
            <span key={index} className="hover:text-secondaryTextColor">
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
      <div className="flex justify-between items-start gap-x-14 md:flex-col sm:flex-col lg:flex-col xl:flex-row flex-col">
        <h1 className="font-bebas text-primaryTextColor xl:text-xlHeading lg:text-lgHeading md:text-mdHeading sm:text-smHeading text-[7.2rem] tracking-tighter xl:leading-[16rem] lg:leading-[14rem] md:leading-[12rem] sm:leading-[10rem] leading-[9rem] flex sm:flex-wrap flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
          {Array.from("DEVELOPER").map((letter, index) => (
            <span key={index} className="hover:text-secondaryTextColor">
              {letter}
            </span>
          ))}
        </h1>
        <div className="font-robot text-secondaryTextColor md:p-4 md:w-2/4 sm:w-3/4 ">
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
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z"
                fill="#777777"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
