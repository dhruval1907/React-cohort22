import React from "react";

const Sec4part1 = () => {
  return (
    <div class="h-[50%] w-full flex gap-6 ">
      <div class="flex h-[100%] w-[50%]  flex-col ">
        <h1 class="text-4xl">OUR ADVANTAGES</h1>
        <img
          class="rounded-xl h-full w-full object-cover  "
          src="https://media.discordapp.net/attachments/1422140907406360618/1452148852554596533/shadowgirl.png?ex=6948c282&is=69477102&hm=d250372174df19beaba2468541fac22ce11bed14aeecd4442771b535335d133c&=&format=webp&quality=lossless&width=1266&height=812"
          alt=""
        />
      </div>
      <div class="flex flex-col w-[53%] h-[100%] justify-between mt-8">
        <div class="w-full h-[47%] bg-[#1e1e1e] rounded-xl py-4 px-4">
          <h1>INDEPENDENT DESIGNERS</h1>
          <div class="flex items-end justify-between">
            <p class="mt-3 w-[70%] ">
              Our platform celebrates the ingenuity of independent designers,
              offering a diverse range of fashion-forward garments that reflect
              the creativity and innovation of the artists behind them. Explore
              curated collections showcasing unique creations by independent
              designers.
            </p>
            <button class="bg-[#111] py-3 px-5 rounded-xl">Explore now</button>
          </div>
        </div>
        <div class="w-full h-[47%] bg-[#1e1e1e] rounded-xl py-4 px-4">
          <h1>EXCLUSIVE & UNIQUITY</h1>
          <div class="flex items-end justify-between">
            <p class="mt-3 w-[70%] ">
              Indulge in curated collections showcasing exclusive, one-of-a-kind
              pieces, each with its own story and charm. Experience the allure
              of unique fashion pieces that radiate sophistication and
              individuality, curated for those who seek exclusivity.
            </p>
            <button class="bg-[#111] py-3 px-5 rounded-xl">Explore now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec4part1;
