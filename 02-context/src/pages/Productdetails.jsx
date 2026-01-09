import React, { useContext } from "react";
import { ProductDatacontext } from "../context/Productcontext";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const data = useContext(ProductDatacontext);
  console.log(data);

  const { id } = useParams();

  const selectedData = data.find((elem)=>elem.id == id)
  console.log(selectedData);

  return <div></div>;
};

export default Productdetails;
