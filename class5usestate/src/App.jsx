import React, { useState } from "react";

const App = () => {
  const [color, setcolor] = useState(false);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div onMouseOver={()=>setcolor(true)}  className={`h-100 w-100 ${color ? "bg-red-300" : "bg-blue-300"}`}></div>
    </div>
  );
};

export default App;
