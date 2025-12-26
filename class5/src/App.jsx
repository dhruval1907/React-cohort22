import React, { useState } from 'react'

const App = () => {
  const [isDark,setisDark] = useState(false);

  function themeSwitcher(){
    <div style={{
      height : "100vh",
      backgroundColor : isDark ? "#111" : "#fff",
      color :  isDark ? "#111" : "#fff",
      display : "flex",
      alignItems : "center",
      justifyItems : "center",
    }}>
      
    </div>
  }

  return (
    <div>
      <h1>{isDark ? "dark them":"light theme"}</h1>
      <button onClick={(themeSwitcher)=>{
        setisDark(!isDark)
      }}>change theme </button>
    </div>
  )
}

export default App
