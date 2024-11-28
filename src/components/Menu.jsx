import React, { useContext } from "react";
import Navbar from "./Navbar";
import ToggleContext from "../context/ToggleContext";

function Menu() {
  const {setIsNavOpen} = useContext(ToggleContext);
  const scrollToSection=(id)=>{
    const section  = document.getElementById(id);
    if(section){
      section.scrollIntoView({behavior: "smooth"});
      setIsNavOpen(prev=> !prev)
    }
  }
  return (
    <div className="min-h-screen bg-primaryBg">
      <Navbar />
      <div className="text-primaryTextColor font-bebas text-phoneHeading md:text-smHeading md:leading-none p-5 text-right">
        <h2 className="md:mr-20 hover:text-hoverBg cursor-pointer" onClick={()=>scrollToSection("projects")}>Projects</h2>
        <h2 className="md:mr-20 hover:text-hoverBg cursor-pointer" onClick={()=>scrollToSection("experience")}>Experience</h2>
        <h2 className="md:mr-20 hover:text-hoverBg cursor-pointer" onClick={()=>scrollToSection("servcies")}>Services</h2>
        <h2 className="md:mr-20 hover:text-hoverBg cursor-pointer" onClick={()=>scrollToSection("contact")}>Contact</h2>
      </div>
    </div>
  );
}

export default Menu;
