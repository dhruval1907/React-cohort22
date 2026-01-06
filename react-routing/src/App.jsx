import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import {Route, Routes} from "react-router-dom";
const App = () => {
  return (
    <div className='bg-black h-screen w-full'>

        <Routes >
          <Route path='/' element={<Hero />}/>
          <Route path='/' element={<Hero />}/>
          <Route path='/' element={<Hero />}/>
        </Routes>

      <Nav/>
      <Hero />
      <Footer />
    </div>
  )
}

export default App