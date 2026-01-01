import React, { useState } from 'react'

const App = () => {
  const [val, setval] = useState({name : "harsh" , isBanned : false})
  return (
    <div className='bg-red-300 h-screen w-full text-white font-semibold p-10'>
      <p>name  :  {val.name}</p>
      <p>isBanned  : {val.isBanned.toString()}</p>
      <button className='px-4 py-2 bg-blue-300 rounded-full text-black text-sm'>change user</button>
    </div>
  )
}

export default App
