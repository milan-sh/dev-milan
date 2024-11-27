import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from "./components/Skills"
import Work from './components/Work'
import Experience from './components/Experience'

function App() {
  return (
    <div className='min-h-screen bg-primaryBg'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Work/>
      <Experience/>
    </div>
  )
}

export default App
