import React, { useState } from 'react'

const App = () => {
  const [val, setval] = useState({username : "harsh" , isLoggined : true})
  return (
    <div className='bg-red-300 h-screen w-full text-white font-semibold p-10'>
      <p>username  :  {val.username}</p>
      <p>isBanned  : {val.isLoggined.toString()}</p>
      <button onClick={()=>setval({...val,isLoggined : !val.isLoggined})} className={`px-4 py-2 ${!val.isLoggined ? "bg-red-500 " : "bg-blue-300    "} rounded-full`}>change</button>
      
    </div>
  )
}

export default App
