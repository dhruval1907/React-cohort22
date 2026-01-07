import React, { createContext } from 'react'

export const userdatacontext = createContext()
const Usercontext = (props) => {
    console.log();
    
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Usercontext