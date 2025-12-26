import React, { useState } from "react";

const App = () => {
  const [isShown, setisShown] = useState(false);

  return (
    <div className="h-screen w-full bg-black text-white  p-3">
      <div style={{
        display:isShown?"none":"block"
      }}>
        <input
          type="text"
          placeholder="password"
          className="p-2 border-1 border-white rounded-sm"
        />
        <button className="p-2 bg-zinc-600 rounded-full px-7 ">show </button>
      </div>
    </div>
  );
};

export default App;
