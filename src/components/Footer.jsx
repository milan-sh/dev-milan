import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const date = new Date();
  return (
    <footer className="p-5">
      <div className="grid  lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 md:justify-between gap-y-3">
        <div className="flex items-end justify-center lg:justify-start">
          <p className="text-secondaryTextColor font-semibold text-center lg:text-start md:order-1 order-3">
            <FontAwesomeIcon color="#777777" icon={faCopyright} />{" "}
            {date.getFullYear()} Milan Singh. All rights reserved.
          </p>
        </div>
        <p className="text-center mx-auto text-secondaryTextColor font-semibold text-xl md:text-2xl cursor-pointer md:order-2 order-2">
          devmilansingh81@gmail.com
        </p>
        <div className="flex lg:justify-end justify-center items-center gap-x-2 md:order-3 order-1">
          <Button>
            <a href="https://github.com/milan-sh" target="_blank">
              Github
            </a>
          </Button>
          <Button>
            <a
              href="https://www.linkedin.com/in/milan-singh-81ms33/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button>
            <a href="https://discord.com/users/mil_8133" target="_blank">
              Discord
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
