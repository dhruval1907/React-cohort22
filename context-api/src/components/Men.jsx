import React, { useContext } from 'react'
import { userDatacontext } from '../context/Usercontext'

const Men = () => {
  const data = useContext(userDatacontext)
  return (
   <div className='h-[80%] w-full bg-blue-500 '>  
      <h1>Men section {data}</h1>
    </div>
  )
}

export default Men