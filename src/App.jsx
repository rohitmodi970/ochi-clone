import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import ReadyToStart from './components/ReadyToStart'

import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen text-zinc-900 bg-zinc-100">
          <Navbar/>
          <LandingPage/>
          <Marquee/>
          <About/>
          <Eyes/>
          <Featured/>
          <Cards/>
          <ReadyToStart/>
          <Footer/>
      </div>
    </>
  )
}

export default App

