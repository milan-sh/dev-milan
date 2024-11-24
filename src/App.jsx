import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from "./components/Skills"

function App() {
  return (
    <div className='min-h-screen bg-primaryBg'>
      <Navbar/>
      <Hero/>
      <Skills/>
    </div>
  )
}

export default App
