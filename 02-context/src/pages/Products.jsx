import React, { useContext } from "react";
import { ProductDatacontext } from "../context/Productcontext";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const naviagate = useNavigate()
  const data = useContext(ProductDatacontext);
  return (
      <div className="flex gap-5 flex-wrap">
          <button onClick={()=>{
            naviagate("/")
          }} className="h-10 w-30 bg-amber-700 rounded-2xl text-2xl font-semibold">back</button>
        {data.map(function (elem, idx) {
          return (
            <a
              href=""
              target="_blank"
              key={idx}
              className=" bg-blue-400 flex flex-wrap gap-10 rounded-2xl"
            >
              <div className="h-85 w-85 flex flex-wrap items-center justify-center  font-semibold text-2xl ">
                <img
                  className="h-60 w-60 object-cover"
                  src={elem.image}
                  alt=""
                />
                <h4 className="text-center">{elem.title}</h4>
              </div>
            </a>
          );
        })}
      </div>

  );
};

export default Products;
