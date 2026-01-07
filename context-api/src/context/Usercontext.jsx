import React, { createContext } from 'react'

export const userdatacontext = createContext()
const Usercontext = (props) => {

    const user = "dhruval"
  return (
    <div>
        <userdatacontext.Provider value={user}>
        {props.children}

        </userdatacontext.Provider>
    </div>
  )
}

export default Usercontext