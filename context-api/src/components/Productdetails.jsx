import React, { useContext } from 'react'
import { Uesredatacontext } from '../context/Usercontext'

const Productdetails = () => {
  const data = useContext(Uesredatacontext)
  return (
    <div>
      {data}
    </div>
  )
}

export default Productdetails