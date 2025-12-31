import React, { useState } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [allusers, setallusers] = useState([]);

  async function getdata() {
    const ans = await axios.get("https://picsum.photos/v2/list");
    console.log(allusers);
    setallusers(ans.data);
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <button
        onClick={getdata}
        className="px-10 mb-7 mt-5 py-3 rounded-full bg-blue-300 font-semibold "
      >
        Get User Data
      </button>
      <div className="min-h-[70vh] w-full p-5 bg-black flex flex-wrap gap-5">
        {allusers.map((elem, idx) => {
          return (
            <div key={idx} className="min-h-120 w-100 bg-red-500 rounded-2xl">
              <div className="h-full w-full overflow-hidden relative z-[2]">
                <img
                  className="absolute  h-full w-full object-cover object-left rounded-2xl"
                  // src={elem.author}
                  alt=""
                />
                <div className="text-white p-5 absolute z-[3] bg-black/10 h-full w-full">
                  <h1 className="font-semibold text-5xl">01.</h1>
                  <h4 className="font-bold text-5xl mt-4 leading-[3rem]">
                    Dhruval <br /> Dalwadi
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
