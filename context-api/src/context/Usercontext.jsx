import React, { createContext } from 'react'

export const UserDataContext = createContext()
const Usercontext = (props) => {
  
  const user = "sarthack" 
  return (
    <div>
      <UserDataContext.Provider value={user}>
      {props.children}
      </UserDataContext.Provider>
    </div>
  )
}

export default Usercontext