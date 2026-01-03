import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import {Routes} from "react-router-dom";
const App = () => {
  return (
    <div className='main p-10'>
      <Nav/>
      <Routes path="/" element={<Home/>} />
    </div>
  )
}

export default App
