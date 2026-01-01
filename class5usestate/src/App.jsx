import React, { useState } from "react";

const App = () => {
  const [color, setcolor] = useState([]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-5">
      <div className={`h-100 w-100 bg-${color ? "bg-red-100" : "bg-blue-200"}`}></div>
      <button onClick={()=>setcolor("red")} className="px-4 py-2 bg-white text-normal font-semibold ">
        chnage color
      </button>
    </div>
  );
};

export default App;
