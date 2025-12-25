import React from "react";
import { useState } from "react";
const App = () => {
  const user = ["aray","dhruval","sarthack","harsh"]
  const [Num, setNum] = useState(0);

  return (
    <div>
      <h1>{user[Num]}</h1>
      <button onClick={()=>{
        setNum(Num+1)
      }}>random</button>
    </div>
  );
};

export default App;
