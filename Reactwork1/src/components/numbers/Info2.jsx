import React from 'react'

const Info2 = (props) => {
  return (
    <div class="w-[50%] h-full flex items-center justify-between px-10">
      <div>
        <h1 class="text-base">{props.name}</h1>
        <h1 class="text-4xl font-light">{props.num}</h1>
      </div>
    </div>
  )
}

export default Info2
