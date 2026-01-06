import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='bg-black h-screen w-full'>
      <Nav/>
      <Hero />
      <Footer />
    </div>
  )
}

export default App