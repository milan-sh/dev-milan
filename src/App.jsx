import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import ToggleContext from "./context/ToggleContext";

function App() {
  const { isNavOpen } = useContext(ToggleContext);
  return (
    <div className="min-h-screen bg-primaryBg">
      {isNavOpen && <Menu />}
      {isNavOpen? null : <Navbar/>}
      <Hero />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
