import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({name : "harsh",isBanned : true})

  return (
    <div className='h-screen bg-black w-full p-5'>
      <p className='text-white font-semibold mb-4 text-6xl'>name :{num.name}</p>
      <p className='text-white font-semibold mb-4 text-6xl'>{num.isBanned.toString()}</p>
      <button onClick={()=>setnum({name : "dhruval",isBanned:{}})}  className='px-4 py-2 bg-red-300 text-white rounded-full'>get data</button>
    </div>
  )
}

export default App
