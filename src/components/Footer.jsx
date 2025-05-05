import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const date = new Date();
  const[showCopyButton, setShowCopyButton] = useState(false)
  return (
    <footer className="p-5">
      <div className="grid  lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 md:justify-between gap-y-3">
        <div className="flex items-end justify-center lg:justify-start md:order-1 order-3">
          <p className="text-secondaryTextColor font-semibold text-center lg:text-start ">
            <FontAwesomeIcon color="#777777" icon={faCopyright} />{" "}
            {date.getFullYear()} Milan Singh. All rights reserved.
          </p>
        </div>
        <div className="relative mx-auto md:order-2 order-2">
          <p className="text-center text-secondaryTextColor font-semibold text-xl md:text-2xl cursor-pointer  hover:text-hoverBg" onMouseEnter={()=>setShowCopyButton(true)} >
            devmilansingh81@gmail.com
          </p>
          {showCopyButton ? <Button className="absolute -top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%]">click here to copy</Button> : ""}
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-x-2 md:order-3 order-1">
          <Button className="border-none">
            <a href="https://github.com/milan-sh" target="_blank">
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </Button>
          <Button className="border-none">
            <a
              href="https://www.linkedin.com/in/milan-singh-81ms33/"
              target="_blank"
            >
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a>
          </Button>
          <Button className="border-none">
            <a href="https://discord.com/users/mil_8133" target="_blank">
              <FontAwesomeIcon size="xl" icon={faDiscord} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
