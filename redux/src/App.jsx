import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {increnment , decrenment } from "./features/Counterslice";

const App = () => {

  const dispatch = useDispatch()
  const selector = useSelector((state)=>state.counter.value)

  return (
    <div>
      <h1>{selector}</h1>
      <button>increase</button>
      <button>decrease</button>
    </div>
  );
};

export default App;
