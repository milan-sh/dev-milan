import React from "react";
import skills from "./skillCollection";
import Marquee from "react-fast-marquee";
import {useScrollAnimations} from "../custom_hooks/useScrollAnimations"

function Skills() {
  useScrollAnimations();
  return (
    <div className="w-full">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Skills
      </h1>
      <div className="animate-on-scroll flex text-center justify-evenly p-2 gap-x-8 overflow-x-hidden">
        <Marquee pauseOnHover speed={100}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center gap-y-3 h-fit w-fit mx-10 my-16 px-14 py-10 rounded-lg hover:scale-110 duration-300 shadow-custom-orange"
            >
              <img className="h-20 w-20" src={skill.url} alt="" />
              <h2 className="text-secondaryTextColor font-semibold text-xl">
                {skill.name}
              </h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
