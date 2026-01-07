import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Products from './components/Products'
import Men from './components/Men'
import Women from './components/Women'
import Productdetails from './components/Productdetails'

const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Productdetails/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
      </Routes>
    </div>
  )
}

export default App