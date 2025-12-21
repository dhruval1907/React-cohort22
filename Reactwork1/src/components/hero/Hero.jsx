import React from "react";
import Text from "./Text";

const Hero = () => {
  return (
    <div class="h-[88%] w-[100%] mt-5 flex items-center justify-center relative">
      <div class="h-[95%] w-[98%] flex items-center justify-center">
        <img
          class="w-[100%] h-[100%]  rounded-xl object-cover"
          src="https://media.discordapp.net/attachments/1422140907406360618/1452148852348948590/hero.png?ex=6948c282&is=69477102&hm=85f596fce1449d10450a7a9a3fdd0430758e04b3962cd5128ace38ad81436031&=&format=webp&quality=lossless&width=1661&height=812"
          alt=""
        />
      </div>
      <Text/>
    </div>
  );
};

export default Hero;
