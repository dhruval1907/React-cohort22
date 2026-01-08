import React, { useContext } from "react";
import { userDatacontext } from "../context/Usercontext";

const Productdetails = () => {
  const data = useContext(userDatacontext)
  return (
    <div className="h-[80%] w-full bg-blue-300 ">
      <h1>ki haal hai {data}</h1>
    </div>
  );
};

export default Productdetails;
