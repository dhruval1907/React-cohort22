import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom";
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='main p-10'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
