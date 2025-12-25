import React from "react";
import { useState } from "react";

const App = () => {
  const [off, setoff] = useState("off")

  return (
  <div>
    <button style={{padding:"10px 30px ",fontSize:"20px"}} onClick={()=>{
      setoff({off==="off"?"on":"off"})
    }}>{off}</button>
  </div>)
};

export default App;
