import React, { useContext } from 'react'
import { ThemeDatacontext } from '../context/Themecontext'

const Hero = () => {
    const [theme,setTheme] = useContext(ThemeDatacontext)
  return (
    <div className='h-20 text-center  text-5xl  bg-blue-200 text-white font-semibold'>
        <h1>Hero section {theme}</h1>
    </div>
  )
}

export default Hero