import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-10 w-full flex justify-between px-10 items-center'>
        <h2>sheriyans</h2>
        <div className='flex gap-10'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </div>
    </div>
  )
}

export default Nav
