import React, { useState } from "react";

const App = () => {
  const [isRed, setIsRed] = useState(false);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-5 text-white">
      <h1>{isRed ? "Red" : "Blue"}</h1>

      <div
        className={`h-[200px] w-[200px] ${
          isRed ? "bg-red-300" : "bg-blue-300"
        }`}
      ></div>

      <button
        onClick={() => setIsRed(!isRed)}
        className="px-4 py-2 bg-white text-black font-semibold"
      >
        Change Color
      </button>
    </div>
  );
};

export default App;
