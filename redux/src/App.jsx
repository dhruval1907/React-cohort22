import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { byfive, decrement, increment } from "./features/Counterslice";

const App = () => {

  const dispatch = useDispatch()
  const selector = useSelector(a)

  return (
    <div>
      <h1>0</h1>
      <button>increase</button>
      <button>decrease</button>
    </div>
  );
};

export default App;
