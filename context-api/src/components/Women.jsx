import React, { useContext } from "react";
import { userDatacontext } from "../context/Usercontext";

const Women = () => {
    const data = useContext(userDatacontext)
  return (
    <div className="h-[80%] w-full bg-blue-300 ">
      <h1>women section {data}</h1>
    </div>
  );
};

export default Women;
