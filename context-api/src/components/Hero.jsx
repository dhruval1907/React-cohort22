import React, { useContext } from "react";

const Hero = () => {
  const data = useContext(user)
  return (
    <div>
      <h1 className="w-full text-center bg-blue-400">Ki haal hai </h1>
    </div>
  );
};

export default Hero;
