import React from 'react'

const Nav = () => {
  return (
    <div className='h-10 bg-blue-500  p-10 text-white font-semibold text-xl flex justify-between items-center '>
      <h2>Sheriyans</h2>
      <div className='flex items-center gap-10'>  
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/Course">Course</a>
      </div>
    </div>
  )
}

export default Nav