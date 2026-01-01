import React, { useState } from "react";

const App = () => {
  const [pass, setpass] = useState(false);

  return (
    <div className="p-5 flex gap-4">
      <input
        className="border-2 border-black"
        type="text"
        placeholder="enter your passowrd"
      />
      <button onClick={()=>setpass(!pass)}  className="px-4 py-2 bg-red-300 text-white rounded-full">
        {pass ? "show" : "hide"}
      </button>
    </div>
  );
};

export default App;
