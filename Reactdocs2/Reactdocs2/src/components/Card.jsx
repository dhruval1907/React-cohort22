import React from 'react'
import { FaFileContract } from "react-icons/fa";
const Card = () => {
  return (
    <div className='w-70 h-90 bg-zinc-800/90 rounded-2xl text-white p-5'>
      <FaFileContract />
      <p className='text-sm font-semibold mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </div>
  )
}

export default Card
