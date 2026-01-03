import React from 'react'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom";
import About from './pages/About';
import Products from './pages/Product';
import Notfound from './pages/Notfound';
import Nav from './components/Nav';
import Men from './pages/Men';
import Women from './pages/Women';

const App = () => {
  return (
    <div className='h-screen overflow-hidden w-full bg-black text-white font-semibold p-5'>
      <Nav/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/products'  element={<Products/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
