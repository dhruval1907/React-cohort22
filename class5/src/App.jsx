import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0)
  return (

    <div className="h-screen w-full bg-zinc-300">
      <h1>{num}</h1>
      <button style={{fontWeight:"600",padding:"10px 10px"}} onClick={()=>{
        setnum(num+1)
      }}>Increase</button>
      <button style={{fontWeight:"600",padding:"10px 10px"}} onClick={()=>{
        setnum(num+2)
      }}>Increase by 2 </button>
      <button style={{fontWeight:"600",padding:"10px 10px"}} onClick={()=>{
        setnum(num+5)
      }}>Increase by 5</button>
    </div>
  )
};

export default App;
