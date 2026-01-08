import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


export const ProductDatacontext = createContext()

const Productcontext = (props) => {
  const [Products, setproducts] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setproducts(response.data);
  };

  useEffect(function () {
    getData();
  }, []);

  return (<div>
    <ProductDatacontext value={ProductDatacontext}>
      {props.children}
    </ProductDatacontext>
  </div>);
};

export default Productcontext;
