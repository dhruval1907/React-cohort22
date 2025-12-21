import React from 'react'

const Card = (promps) => {
    console.log(promps);
    
  return (
    <div>
      <div className="card w-[100%] h[100%] border-1 border-white text-center flex items-center flex-col  rounded-xl">
        <img class="h-[200px] w-[200px] object-cover  rounded-full m-5" src={promps.img} alt="" />
        <h1 class="font-semibold text-2xl mt-2">{promps.user}</h1>
        <h4 class="font-medium text-3xl m-4">{promps.age}</h4>
        <p class="text-center font-semibold text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, fuga.</p>
      </div>
    </div>
  )
}

export default Card
