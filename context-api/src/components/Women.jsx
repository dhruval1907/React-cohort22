import React, { useContext } from 'react'
import { Uesredatacontext } from '../context/Usercontext';

const Women = () => {
  const data = useContext(Uesredatacontext)
  console.log(data);
  
  return (
    <div>Women {data} </div>
  )
}

export default Women