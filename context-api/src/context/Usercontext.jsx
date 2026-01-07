import React, { createContext } from "react";

export const userDataContext = createContext();
const Usercontext = (props) => {
  const user = "dhruval";
  return (
    <div>
      <userDataContext.Provider value={user}>
        {props.children}
      </userDataContext.Provider>
    </div>
  );
};

export default Usercontext;
