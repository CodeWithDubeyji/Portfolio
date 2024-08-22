import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=" overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">

      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#f9d48a]"></div>
      </div>

      <div className="container mx-auto px-20">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
      </div>
    </div>
  )
}

export default App