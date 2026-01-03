import React from 'react'
import axios from "axios"
const App = () => {

  const getData = async()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon") 
    console.log(response);
    
  }


  return (
    <div>
      
    </div>
  )
}

export default App
