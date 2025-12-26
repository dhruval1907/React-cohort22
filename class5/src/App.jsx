import React, { useState } from 'react'

const App = () => {
  const [isDark, setisDark] = useState(false)
  return (
    <div style={{
        backgroundColor:isDark?"#fff":"#111",
        color:isDark?"#111":"#fff",
        display:"flex",
        alignItems:"center",
        height:"100vh",
        justifyContent:"center",
    }}>
      <h1>{isDark?"light theme":"dark theme "}</h1>
      <button onClick={}>chnage theme </button>
      
    </div>
  )
}

export default App
