import React, { createContext } from 'react'


export const Uesredatacontext = createContext()

const Usercontext = (props) => {

  return (
    <div>
      <Uesredatacontext.Provider value={"dhruval"}>
        {props.children}
      </Uesredatacontext.Provider>
    </div>
  )
}

export default Usercontext