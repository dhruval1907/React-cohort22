import axios from "axios";
import React, { useEffect, useState } from "react";




const Productcontext = (props) => {
  const [Products, setproducts] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setproducts(response.data);
  };

  useEffect(function () {
    getData();
  }, []);

  return <div>{props.children}</div>;
};

export default Productcontext;
