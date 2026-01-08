import React from "react";
import axios from "axios";

const App = () => {
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  };
  return (
    <div>
      <button
        onClick={() => {
          getData();
        }}
        className="h-7 w-30 rounded-2xl bg-blue-300 text-sm font-semibold"
      >
        get data
      </button>
    </div>
  );
};

export default App;
