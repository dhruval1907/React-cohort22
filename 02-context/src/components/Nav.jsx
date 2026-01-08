import React, { useContext } from 'react'
import { ThemeDatacontext } from '../context/Themecontext'

const Nav = () => {

  const [theme,setTheme] = useContext(ThemeDatacontext)

  return (
    <div className='h-20 w-full bg-blue-400 '>
      <h1 className='text-center p-10 text-5xl'>nav {theme}</h1>

      <button onClick={()=>{
        if(theme === "light"){
          setTheme("dark")
        }else{
          setTheme("light")
        }
      }} className='h-10 w-40 bg-red-400 rounded-2xl border-none'>click me </button>
    </div>
  )
}

export default Nav