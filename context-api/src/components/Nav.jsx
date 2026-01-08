import React from 'react'

const Nav = () => {
  return (
    <div className='text-white flex items-center justify-between px-10  h-20 w-full bg-blue-200 '>
        <h2>Sheriynas</h2>
        <div className='flex gap-10 items-center'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Product</a>
        </div>
    </div>
  )
}

export default Nav