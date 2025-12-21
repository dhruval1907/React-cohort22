import React from "react";

const Cards = (promps) => {
  return (
    <div class="card h-[45%] w-[20%] bg-white rounded-xl relative">
      <div class="upper flex px-4  items-center justify-between h-[15%] ">
        <img
          class="h-[30px] w-[30px]"
          src={promps.image}
          alt=""
        />
        <h4 class="px-4 py-1 border-1 border-white rounded-xl text-normal font-semibold bg-blue-200">
          save
        </h4>
      </div>
      <div class="mid w-[100%] h-[40%] ">
        <div class="text flex items-center p-4 gap-3">
          <h1 class="font-semibold">{promps.com}</h1>
          <p class="text-[12px] mt-1 opacity-[0.5] ">{promps.day}</p>
        </div>
        <p class="text-2xl font-bold  flex items-center p-4 ">
          {promps.role}
        </p>
        <div class="button flex item-center gap-3 p-4 ">
          <button class="bg-amber-100 p-2 rounded-xl font-semibold">
            part-time
          </button>
          <button class="bg-amber-100 p-2 rounded-xl font-semibold">
            senior level
          </button>
        </div>
      </div>
      <div class="footer h-[20%] w-[100%] absolute top-[80%] rounded-xl  ">
        <hr />
        <div class="flex justify-between items-center p-5">
          <div>
            <h1 class="font-semibold">{promps.money}</h1>
            <p class="font-normal text-sm">{promps.city}</p>
          </div>
          <button class="text-white bg-black rounded-xl border-none px-3 py-2  p-1">Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
