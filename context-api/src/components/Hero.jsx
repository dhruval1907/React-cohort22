import React, { useContext } from "react";
import { UserDataContext } from "../context/Usercontext";

const Hero = () => {

  const data = useContext(UserDataContext)

  return (
    <div className="w-full h-10  text-center ">
      <h1 className="text-5xl">ki haal hai bhai {data}</h1>
    </div>
  );
};

export default Hero;
