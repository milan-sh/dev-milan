import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from "./components/Skills"
import Work from './components/Work'

function App() {
  return (
    <div className='min-h-screen bg-primaryBg'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Work/>
    </div>
  )
}

export default App
