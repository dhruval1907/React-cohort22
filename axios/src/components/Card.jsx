import React from "react";

const Card = (props) => {
  return (
    <div className="h-120 w-100 bg-red-500 rounded-2xl">
      <div className="h-full w-full overflow-hidden relative z-[2]">
        <img
          className="absolute  h-full w-full object-cover object-left rounded-2xl"
          src={props.image}
          alt=""
        />
        <div className="text-white p-5 absolute z-[3] bg-black/10 h-full w-full">
          <h1 className="font-semibold text-5xl">{props.id}</h1>
          <h4 className="font-bold text-5xl mt-4 leading-[3rem]">
           {props.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
