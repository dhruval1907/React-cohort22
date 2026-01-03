import React from "react";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/Rectangle-box.png";
const Menu = () => {
  return (
    <div className="h-[87%] w-full flex justify-between items-center">
      <div className="h-full w-[30%]">
        <img className="h-[100%] w-full object-cover" src={hero2} alt="" />
      </div>
      <div className="w-[55%] flex flex-col justify-evenly h-full">
        <div className="">
          <h1 className="text-8xl text-white font-bold ">
            ALL THE <br /> NIGHT
          </h1>
          <p className="text-lg text-white font-normal w-[50%] nav">
            Fashion that belongs to the shadows. Explore our curated selection
            of Halloween-inspired outfits designed for midnight streets,
            underground scenes, and unforgettable nights.
          </p>{" "}
          <br /> <br />
          <button className="w-50 h-10 rounded-3xl  text-white border-2 font-semibold nav">
            Shop now
          </button>
        </div>
        <div className="h-[40%] w-full flex gap-2">
          <div
            className="h-full w-[33%] rounded-xl flex flex-col  items-center justify-center gap-7"
            style={{
              backgroundImage: `url(${hero3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-red-900 border-b-2  text-center font-medium text-2xl   w-[55%]">
              Latest Events
            </h3>
          
            <div>
              <h4 className="text-red-900 font-medium text-lg text-center">
                chicago - USA{" "}
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                milan - ITALY
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                {" "}
                paris - FRANCE madrid
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                barcelona - SPAIN{" "}
              </h4>
            </div>
          </div>
          <div
            className="h-full w-[33%] rounded-xl flex flex-col  items-center justify-center gap-7"
            style={{
              backgroundImage: `url(${hero3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
              <h3 className="text-red-900 border-b-2  text-center font-medium text-xl whitespace-nowrap  w-[55%]">
              UPCOMING EVENTS
            </h3>
          
            <div>
              <h4 className="text-red-900 font-medium text-lg text-center">
                chicago - USA{" "}
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                milan - ITALY
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                {" "}
                paris - FRANCE madrid
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                barcelona - SPAIN{" "}
              </h4>
            </div>
          </div>
          <div
            className="h-full w-[33%] rounded-xl flex flex-col  items-center justify-center gap-7"
            style={{
              backgroundImage: `url(${hero3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
              <h3 className="text-red-900 border-b-2  text-center font-medium text-2xl   w-[55%]">
              Latest Events
            </h3>
          
            <div>
              <h4 className="text-red-900 font-medium text-lg text-center">
                chicago - USA{" "}
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                milan - ITALY
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                {" "}
                paris - FRANCE madrid
              </h4>
              <h4 className="text-red-900 font-medium text-lg text-center">
                barcelona - SPAIN{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
