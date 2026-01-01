import axios from "axios";
import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {

  const [alluser, setalluser] = useState([])
  const getdata = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    setalluser(response.data)
  }
  

  return (
    <div className="min-h-[100%] w-full flex flex-wrap items-start bg-black text-white p-10 gap-4">
      <button onClick={getdata}  className="px-10 py-3 bg-white text-black font-semibold rounded-full">
        Get data
      </button>
      {alluser.map(function(elem,idx){
        return <Card key={idx} name={elem.author} id={elem.id} image={elem.download_url}  />
      })}
    </div>
  );
};

export default App;
