import React, { useState } from 'react'

const App = () => {
  const [val, setval] = useState({username : "harsh" , isLoggined : true})
  return (
    <div className='bg-red-300 h-screen w-full text-white font-semibold p-10'>
      <p>username  :  {val.name}</p>
      <p>isBanned  : {val.isBanned.toString()}</p>
      
    </div>
  )
}

export default App
