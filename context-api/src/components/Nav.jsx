import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex  justify-between items-center w-full p-5 bg-blue-300/50 h-20'>
        <h2 className=' text-2xl text-white font-semibold'>Myntra</h2>
        <div className='flex gap-10 text-white font-bold text-2xl'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/men">Men </Link>
            <Link to="/women">Woman</Link>
        </div>
    </div>
  )
}

export default Nav