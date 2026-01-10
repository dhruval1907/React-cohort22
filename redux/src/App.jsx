import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { byfive, decrement, increment } from "./features/Counterslice";

const App = () => {
  const dispatch = useDispatch();

  const [num, setnum] = useState(5)

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={()=>{
        dispatch(increment())
      }}
      >
        increnmet
      </button>
      <button
      onClick={()=>{
        dispatch(decrement())
      }}
      >
        decrenment
      </button>
      <button
      onClick={()=>{
        dispatch(byfive(Number(num)))
      }}
      >
        increase by {num}
      </button>
      <input type="number"  
        onChange={(e)=>{
          // console.log();
          setnum(e.target.value)
        }}
      />
    </div>
  );
};

export default App;
