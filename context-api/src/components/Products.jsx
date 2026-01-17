import React, { useContext } from 'react'
import { Uesredatacontext } from '../context/Usercontext'

const Products = () => {

  const data = useContext(Uesredatacontext)

  return (
    <div>
      <h1>Products {data}</h1>
    </div>
  )
}

export default Products