import React, { useState } from "react";

const App = () => {
  const [isShown, setisshown] = useState(false);
  return (
    <div className="h-screen w-full bg-black text-white p-5 ">
      <input
        type={isShown ? "text" : "password"}
        className="p-2 border border-white rounded-sm 
                   bg-white text-black placeholder:text-zinc-500"
      />
      <button className="p-2 bg-zinc-600 rounded-full px-7" onClick={()=>setisshown(!isShown)}>
        {isShown ? "show" : "hide"}
      </button>
    </div>
  );
};

export default App;
