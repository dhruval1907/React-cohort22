import React from "react";
import hero2 from "../assets/hero2.png";
const Menu = () => {
  return (
    <div className="h-[80%] w-full flex justify-between items-center">
      <div className="h-full w-[30%]">
        <img className="h-[100%] w-full object-cover" src={hero2} alt="" />
      </div>
      <div className="w-[55%] ">
        <h1 className="text-8xl text-white font-bold">ALL THE <br />  NIGHT</h1>
        <p  className="text-lg text-white font-medium w-[50%]">Lorem ipsum dolor sit amet, conse etsi ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p> <br /> <br />
        <button className="w-50 h-10 rounded-3xl  text-white border-2 font-semibold">Shop now</button>
      </div>
    </div>
  );
};

export default Menu;
