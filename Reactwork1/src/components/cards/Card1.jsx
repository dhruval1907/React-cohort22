import React from 'react'

const Card1 = (props) => {
  return (
    <div class="h-[75%] w-[25%] flex flex-col justify-evenly items-start  bg-[#1E1E1E] rounded-xl px-10 py-5">
        <h1 class="font-extralight">{props.name}</h1>
        <p>{props.p}</p>
        <button class="bg-[#111] py-3 px-5 rounded-xl">LEARN MORE</button>
    </div>
  )
}

export default Card1
