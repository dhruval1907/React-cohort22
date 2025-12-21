import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

const App = () => {
  return (
    <div class="h-screen w-full bg-black font-[verdana] text-white">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
