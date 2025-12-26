import React, { useState } from 'react'

const App = () => {
  const [isOn,isOff] = useState(false)
  return (
    <div>
      <h1>{isOn?"ON":"OFF"}</h1>
      <button onClick={()=>isOff(!isOn)}>
        {isOn?"ON":"OFF"}
      </button>
    </div>
  )
}

export default App
