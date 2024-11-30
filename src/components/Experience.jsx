import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faLocationDot,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import experience from "./experienceList";
import Button from "./Button";
import {useScrollAnimations} from "../custom_hooks/useScrollAnimations"

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    //here we check if check if it already open then close it otherwise open it
    setActiveIndex(activeIndex === index ? null : index);
  };

  useScrollAnimations();

  return (
    <div id="experience" className="w-full py-10 mb-5">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Experience
      </h1>
      {experience?.map((data, index) => (
        <div
          key={data.id}
          className="animate-on-scroll md:max-w-[60%] w-[90%] m-auto flex flex-col justify-between items-center mb-5 text-gray-900"
        >
          <button
            className="bg-hoverBg flex md:flex-row flex-col justify-between px-4 py-3 font-semibold
              md:text-xl w-full rounded-t-sm "
            onClick={() => {
              toggleAccordion(index);
            }}
          >
            <h2>{data.role}</h2>
            <div className="flex justify-between items-center gap-x-8  md:max-w-fit w-full">
              <p className="tracking-tighter">{data.duration}</p>
              {activeIndex === index ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
          </button>
          {/* show only that where active index is equal to index */}
          {activeIndex === index && (
            <div className="bg-secondaryBg min-w-full rounded-b-sm px-4 py-3 flex flex-col gap-y-2 text-gray-800 font-semibold md:text-lg">
              <div className="flex md:flex-row flex-col gap-y-2 items-start md:items-center md:justify-start gap-x-8">
                <div className="flex justify-between items-center gap-x-3">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {data.location}
                </div>
                <div className="flex justify-between items-center gap-x-3">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <a target="_blank" href={data.webURL}>
                    {data.companyName}
                  </a>
                </div>
              </div>
              <div className="flex justify-between gap-x-3">
                <p className="leading-6 ">{data.desc}</p>
                <img
                  className="size-20 md:block rounded-sm hidden"
                  src={data.url}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-start gap-x-3 flex-wrap gap-y-2">
                {data.tech.map((skill, index) => (
                  <Button
                    key={index}
                    className="border-gray-800 cursor-text"
                    textColor="black"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Experience;
