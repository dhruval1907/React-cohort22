import React, { createContext } from "react";

const userDatacontext = createContext()

const Usercontext = (props) => {
  const data = "sarthack"
  return (
    <div>
      <userDatacontext.Provider value={data}>
        {props.children}
      </userDatacontext.Provider>
    </div>
  );
};

export default Usercontext;
