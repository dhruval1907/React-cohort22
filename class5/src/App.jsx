import React from "react";
import { useState } from "react";
const App = () => {
  const [num, setnum] = useState(0);

  let a = 0;
  function numIncrease() {
    a++;
    setnum(a === 1 ? "sarthak" : "mayur");
    console.log(a);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={numIncrease}>increase</button>
    </div>
  );
};

export default App;
