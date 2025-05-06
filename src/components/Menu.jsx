import React, { useContext } from "react";
import Navbar from "./Navbar";
import ToggleContext from "../context/ToggleContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button.jsx";

function Menu() {
  const { setIsNavOpen } = useContext(ToggleContext);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen((prev) => !prev);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".menu-items", {
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      x: -600,
      stagger: 0.2,
    });
  });

  return (
    <div className="min-h-screen bg-primaryBg">
      <Navbar />
      <div className="text-primaryTextColor font-bebas text-phoneHeading md:text-smHeading md:leading-none md:p-5 pr-2 text-right">
        <h2
          className="menu-items md:mr-20 hover:text-hoverBg cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </h2>
        <h2
          className="menu-items md:mr-20 hover:text-hoverBg cursor-pointer"
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </h2>
        <h2
          className="menu-items md:mr-20 hover:text-hoverBg cursor-pointer"
          onClick={() => scrollToSection("achievements")}
        >
          Achievements
        </h2>
        <h2
          className="menu-items md:mr-20 hover:text-hoverBg cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </h2>
        <div className="menu-items flex justify-end">
          <Button className="bg-primaryBg text-primaryTextColor font-normal px-6 py-1 mt-6 font-sans border-hoverBg hover:border-hoverBg md:hidden block ">
            <a href="https://drive.google.com/uc?export=download&id=1SJfEuAxAIhdsYND7Z7LA1qJ_W2O-HQIk">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
