import React, { createContext, useState } from 'react'

export const ThemeDatacontext = createContext()
const Themecontext = (props) => {
    
    const [Theme, setTheme] = useState("light")

  return (
    <div>
        <ThemeDatacontext.Provider value={[Theme,setTheme]}>
            {props.children}
        </ThemeDatacontext.Provider>
    </div>
  )
}

export default Themecontext