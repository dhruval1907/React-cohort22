import React, { useContext } from 'react'
import Nav from './Nav'
import { userDatacontext } from '../context/Usercontext'

const Hero = () => {
  const data = useContext(userDatacontext)
  return (
    <div className='h-[80%] w-full bg-blue-300 '>  
      <h1>Hero section {data}</h1>
    </div>
  )
}

export default Hero