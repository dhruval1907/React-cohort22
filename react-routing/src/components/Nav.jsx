import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-10 w-full flex justify-between px-10 items-center'>
        <h2>sheriyans</h2>
        <div className='flex gap-10'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/products/men">Men</NavLink>
            <NavLink to="/products/women">Women</NavLink>

        </div>
    </div>
  )
}

export default Nav
