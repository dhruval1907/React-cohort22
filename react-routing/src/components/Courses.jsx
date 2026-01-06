import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Courses = () => {

     const param = useParams()
    console.log(param);
    

  return (
     <div className='h-[89.5%] w-full bg-zinc-400'>
        <h1 className='text-3xl  text-center p-5 font-bold text-white'>This is a course page </h1>
        <Outlet/>
    </div>
  )
}

export default Courses