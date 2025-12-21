import React from 'react'
import Logo from './Logo'
import Links from './Links'

const Navbar = () => {
  return (
    <div class="flex items-end justify-between px-10 h-[70px] w-full ">
      <Logo/>
      <Links/>
    </div>
  )
}

export default Navbar
