import React from 'react'

const Nav = () => {
  return (
    <div className='flex  justify-between items-center w-full p-5 bg-blue-300/50 h-20'>
        <h2 className=' text-2xl text-white font-semibold'>Myntra</h2>
        <div className='flex gap-10 text-white font-bold text-xl'>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Men </a>
            <a href="">Woman</a>
        </div>
    </div>
  )
}

export default Nav