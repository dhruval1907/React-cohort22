import React from 'react'

const Nav = () => {
  return (
    <div className='h-10 w-full flex items-center justify-between p-5'>
      <div>
      <h2>Sheriyans</h2>
      </div>
      <div className='flex gap-10'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">courses</a>
      </div>
    </div>
  )
}

export default Nav
