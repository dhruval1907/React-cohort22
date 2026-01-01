import React from 'react'

const App = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-5 h-screen w-full bg-black'>
      <h1 className='text-2xl text-white font-bold'>color : white</h1>
      <div className='h-100 w-100 bg-white rounded-2xl'></div>
      <button className='px-4 py-2 bg-red-400 rounded-full font-bold'>change color</button>
    </div>
  )
}

export default App
