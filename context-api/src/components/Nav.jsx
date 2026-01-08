import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-white flex items-center justify-between px-10  h-20 w-full bg-blue-200 '>
        <h2>Sheriynas</h2>
        <div className='flex gap-10 items-center'>
          <Link to='/'>Home</Link>
          <Link to='/product'>Products</Link>
          <Link to='/men'>Men</Link>
          <Link to='/women'>Women</Link>
        </div>
    </div>
  )
}

export default Nav