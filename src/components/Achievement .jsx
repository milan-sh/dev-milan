import React from "react";
import {useScrollAnimations} from "../custom_hooks/useScrollAnimations"

function Achievement() {
    useScrollAnimations();
  return (
    <div id="achievements" className="w-full bg-primaryBg mb-5">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Achievements
      </h1>
      <div className="animate-on-scroll flex justify-center items-center md:px-14">
        <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col items-start justify-evenly gap-4">
          <img
            className="rounded-lg object-cover 2xl:h-[30vh] md:h-[60vh] sm:h-[55vh] h-[32vh] m-auto sm:m-auto md:m-4"
            src="/achievement/sih.JPG"
            alt=""
          />
          <div className="text-secondaryTextColor lg:w-[40vw] md:w-[60vw] sm:w-[70vw] w-[88vw] m-auto flex flex-col items-start justify-start py-4">
            <h3 className="text-secondaryTextColor md:text-3xl text-lg font-semibold mb-2">
              1<sup>st</sup> Runner Up - Smart India Hackathon 2022
            </h3>
            <p className="leading-tight md:text-lg text-base 2xl:w-[30vw]">
              I was part of the team Sustainable Daily, which was recognized as
              the first runner-up in the Student Innovation category at Smart
              India Hackathon 2022. Our team developed a prototype to prevent
              road accidents involving heavy vehicles, showcasing our ability to
              address critical challenges with innovative solutions. This
              achievement highlights our commitment to safety and our drive to
              create impactful, real-world applications. It was an honor to be
              part of this esteemed competition and contribute to advancements
              in road safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
