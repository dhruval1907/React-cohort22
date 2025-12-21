import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Card from './components/cards/Card'

const App = () => {
  return (
    <div class="h-screen w-full bg-black font-[verdana] text-white">
      <Navbar/>
      <Hero/>
      <Card/>
    </div>
  )
}

export default App
