import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ url, img, title, skill1, skill2, about, repo }) {
  return (
    <div className="flex flex-col bg-primaryBg">
      <a target="_blank" href={`${url}`}>
        <img
          className="p-2 m-auto hover:scale-[0.96] hover:border-[1px] hover:border-secondaryBg duration-200 object-cover"
          src={`./projectImages/${img}`}
          width="1150"
          height="700"
          alt=""
        />
      </a>

      <div className="p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-hoverBg font-semibold text-xl md:text-2xl">{title}</h2>
          <div className="flex justify-between items-center gap-x-1">
            <Button className="cursor-default">{skill1}</Button>
            <Button className="cursor-default">{skill2}</Button>
            <Button className="border-hoverBg p-0 ml-2"><a href={`${repo}`} target="_blank"><FontAwesomeIcon color="#CB450C" icon={faCode} /></a></Button>
          </div>
        </div>
        <p className="text-secondaryTextColor mt-2 leading-tight">{about}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
