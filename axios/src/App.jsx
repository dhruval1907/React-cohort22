import React from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  async function getdata() {
    const ans = await axios.get("https://picsum.photos/v2/list");
    console.log(ans.data);
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <button
        onClick={getdata}
        className="px-10 mb-7 mt-5 py-3 rounded-full bg-blue-300 font-semibold "
      >
        Get User Data
      </button>
      <div className="h-[70vh] w-full p-5 bg-black flex flex-wrap gap-5">
        a
      </div>
    </div>
  );
};

export default App;
