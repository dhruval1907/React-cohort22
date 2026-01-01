import React, { useState } from "react";

const App = () => {
  const [color, setcolor] = useState(false);

  return (
    <div className={`flex items-center justify-center flex-col gap-5 h-screen w-full ${color ? "bg-blue-200" : "bg-sky-400"}`}>
      <h1 className="text-2xl text-white font-bold">color : {color ? "black" : "white"}</h1>
      <div className={`h-100 w-100 ${color ? "bg-black" : "bg-white"} rounded-2xl`}></div>
      <button
        onClick={() => setcolor(!color)}
        className="px-4 py-2 bg-red-400 rounded-full font-bold"
      >
        change color
      </button>
    </div>
  );
};

export default App;
