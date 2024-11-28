import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from "./components/Skills"
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen bg-primaryBg'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
