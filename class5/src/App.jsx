import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>setnum(num+1)}>Increae</button>
      <button onClick={()=>setnum(num-1)}>Decrease</button>
      <button onClick={()=>setnum()}>Reset</button>
    </div>
  )
}

export default App
