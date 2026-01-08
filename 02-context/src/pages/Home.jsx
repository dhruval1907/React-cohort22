import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-5xl font-semibold'>All the products</h1>
        <button onClick={()=>{
            navigate("/product")
        }} className='h-10 w-50 bg-blue-400 rounded-full font-semibold '>explore all products</button>
    </div>
  )
}

export default Home