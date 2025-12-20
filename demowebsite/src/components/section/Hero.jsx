import React from "react";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <img className="heroimg" src={heroImage} alt="Hero section" />
    </div>
  );
};

export default Hero;
