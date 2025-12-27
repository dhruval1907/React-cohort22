import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");

  const [alluser, setAlluser] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    setAlluser([...alluser, { name: name, number: number, image: image }]);
    // setAlluser(alluser)

    setName("");
    setNumber("");
    setImage("");
  };

  return (
    <div
      className="h-screen px-20 py-10  w-full flex items-start justify-between flex-wrap flex-col"
      style={{ background: "conic-gradient(black,white,white,black)" }}
    >
      <div className="h-[60%] w-[40%] bg-zinc-500 rounded-xl p-4">
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
        >
          <span className="font-semibold ">NAME : </span>{" "}
          <input
            onChange={(e) => {
              // console.log(e.target.value);
              setName(e.target.value);
            }}
            type="text"
            value={name}
            className="border-3 border-white rounded-sm"
          />{" "}
          <br /> <br />
          <span className="font-semibold ">Mobile : </span>{" "}
          <input
            onChange={(e) => {
              // console.log(e.target.value);
              setNumber(e.target.value);
            }}
            value={number}
            type="text"
            className="border-3 border-white rounded-sm"
          />{" "}
          <br /> <br />
          <span className="font-semibold ">Image : </span>{" "}
          <input
            onChange={(e) => {
              // console.log(e.target.value);
              setImage(e.target.value);
            }}
            value={image}
            type="text"
            className="border-3 border-white rounded-sm"
          />{" "}
          <br /> <br />
          <button className="px-5 py-2 bg-amber-500  rounded-xl text-white font-semibold">
            submit
          </button>
        </form>
      </div>
      {alluser.map(function (elem) {
        return (
          <div className="h-20 flex justify-around items-center  w-70 mt-3 bg-zinc-600 rounded-xl text-white">
            <div className="h-[70%] rounded-full  w-[20%] ">
              <img className="h-full w-full object-center object-cover rounded-full"  src={elem.image} alt="" />
            </div>
            <div className="w-[60%] h-full mt-7">
              <h1 className="font-semibold text-lg">{elem.name}</h1>
              <h4 className="font-semibold text-base"> {elem.number}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
