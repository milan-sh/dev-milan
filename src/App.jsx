import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Achievement from "./components/Achievement ";
import ToggleContext from "./context/ToggleContext";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const { isNavOpen } = useContext(ToggleContext);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  
  return (
    <>
      <ReactLenis root>
        <div className="min-h-screen bg-primaryBg">
          {isNavOpen && <Menu />}
          {isNavOpen ? null : <Navbar />}
          <Hero />
          <Skills />
          <Work />
          <Experience />
          <Achievement/>
          <Contact />
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
