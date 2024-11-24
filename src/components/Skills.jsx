import React from "react";
import skills from "./skillCollection";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div className="min-h-screen w-full">
      <h1 className="text-center text-primaryTextColor font-bebas md:text-mdHeading text-mobileHeading">
        Skills
      </h1>
      <div className="flex text-center justify-evenly p-4 gap-x-8 overflow-x-hidden">
        <Marquee pauseOnHover speed={100}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center gap-y-3 h-fit mx-5 my-10 px-14 py-10 rounded-lg hover:scale-125 duration-300 shadow-custom-orange"
            >
              <img className="h-20 w-25" src={skill.url} alt="" />
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
