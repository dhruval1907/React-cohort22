import React, { useContext } from "react";
import { userDatacontext } from "../context/Usercontext";

const Products = () => {
  const data = useContext(userDatacontext)
  return (
    <div className="h-[80%] w-full bg-blue-300 ">
      <h1>product section {data}</h1>
    </div>
  );
};

export default Products;
