import React from 'react'
import Nav from "./components/navbar/Navbar"
import Hero from './components/section/Hero'
import Section from "./components/section2/Section2"
import Section3 from "./components/section3/Section3"
const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Section/>
      <Section3/>
    </div>
  )
}

export default App
