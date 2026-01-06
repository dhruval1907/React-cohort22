import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-500'>
      <Nav />
      <Hero/>
    </div>
  )
}

export default App