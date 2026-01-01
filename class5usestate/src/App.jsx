import React from 'react'

const App = () => {
  return (
    <div className='p-5 flex gap-4'>
      <input className='border-2 border-black' type="text" placeholder='enter your passowrd' />
      <button className='px-4 py-2 bg-red-300 text-white rounded-full'>show pass</button>
    </div>
  )
}

export default App
