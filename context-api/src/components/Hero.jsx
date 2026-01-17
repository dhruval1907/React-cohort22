import React from 'react'
import Usercontext, { Uesredatacontext } from '../context/Usercontext'

const Hero = () => {

  const data = Usercontext(Uesredatacontext)
  return (
    <div>
      <h1>Hero {data}</h1>
    </div>
  )
}

export default Hero