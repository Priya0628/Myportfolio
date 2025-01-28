import React from 'react'
import Navbar from './Components/Navb/Navbar'
import Hero from './Components/Hero/hero'; 
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Work from './Components/work/work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'; // Import Footer


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App