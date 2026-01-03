import React from "react";
import image from "../assets/hero.png"
import image2 from "../assets/HALLOWEEN.png"
import image3 from "../assets/PRESENT.png"
import image4 from "../assets/Shaoe.png"
const Home = () => {
  return (
    <div className="h-[85%] w-full flex items-center justify-center">
      <div className="relative h-full w-full ">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
