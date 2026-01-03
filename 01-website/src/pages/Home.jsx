import React from "react";
import image from "../assets/hero.png";
import image2 from "../assets/HALLOWEEN.png";
import image3 from "../assets/PRESENT.png";
import image4 from "../assets/Shaoe.png";
import reactange from "../assets/Rectangle.png";
const Home = () => {
  return (
    <div className="h-[85%] w-full flex items-center justify-center relative ">
      <div className=" h-full w-full ">
        <div className="absolute flex flex-col items-center w-full">
          <div className="flex  relative w-full items-center justify-center h-40">
            <img className="absolute" src={image3} alt="" />
            <img className="ab" src={image4} alt="" />
          </div>
          <div className="text-xl absolute top-[13vh] right-[25%]">
            <img className="w-[80%]" src={image2} alt="" />
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-center ">
          <img className="h-[100%] " src={image} alt="" />
          <div className="absolute z-[99]  h-60 w-[40%] flex flex-col items-center justify-center  bottom-0 left-[4%]" style={{backgroundImage:`URL(${reactange})`}}>
            <h1 className="text-red-900 mb-5 font-bold text-3xl text-left w-[55%] ">HALLOWEEN NIGHT</h1>
            <p className="text-white/60 font-light text-lg text-left w-[55%] ">Unleash the darkness. Discover limited-edition styles inspired by the mystery of Halloween — crafted for bold souls who dress beyond the ordinary.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
