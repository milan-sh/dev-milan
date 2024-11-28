import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="flex justify-between md:px-6 p-4 pt-12 h-[10vh] mb-5 items-center">
      <Button
      className="border-none bg-hoverBg font-bold py-1 px-2 text-xl"
      textColor="black"
      >MILAN SINGH</Button>
      <div className="flex items-center justify-between gap-x-5">
        <Button
        className="hover:bg-hoverBg hover:text-black hover:border-hoverBg hidden md:block "
        >CONTACT</Button>
        <Button className="border-none">
          <FontAwesomeIcon size="xl" className="hover:text-[#CB450C]" icon={faBars} />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
