import React from 'react'

const Card = (props) => {
  return (
    <div className='w-70 h-70 bg-zinc-700 rounded-xl p-3'>
      <h1 className='text-white font-semibold text-3xl '>{props.name}</h1>
      <h4 className='text-white font-semibold text-3xl'>age:{props.age}</h4>
      <h3 className='text-white font-semibold text-3xl wrap-break-word'>{props.skills}</h3> 
    </div>
  )
}

export default Card
