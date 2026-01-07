import React, { useContext } from 'react'
import { userdatacontext } from '../context/Usercontext'

const Hero = () => {
  const data = useContext(userdatacontext)
  return (
    <div className='p-5 text-center w-full bg-red-600'>
        <h1>Ki haal hai {data} </h1>
    </div>
  )
}

export default Hero