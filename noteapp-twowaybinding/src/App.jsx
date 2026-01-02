import React, { useState } from "react";
import image1 from "./assets/gif.gif";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const copy = [...alltask];
    copy.push({ title, details });
    setalltask(copy);
    // console.log(copy);
    console.log(alltask);
  };

  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [alltask, setalltask] = useState([]);

  return (
    <div
      className="h-screen w-full  flex justify-between  p-5 relative"
      style={{ background: "linear-gradient(lightblue,darkblue) " }}
    >
      <div className="w-[40%] h-[80%] ">
        <div className="h-[5rem] w-full">
          <marquee behavior="scroll" direction="right">
            <img className="h-[10rem]" src={image1} alt="" />
          </marquee>
        </div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
            setdetails("");
            settitle("");
          }}
          className="flex  p-15  items-center text-left  h-full   flex-col gap-4"
        >
          <h1 className="text-3xl font-semibold ">Add notes</h1>

          <input
            onChange={(e) => {
              settitle(e.target.value);
            }}
            type="text"
            value={title}
            placeholder="Enter Task "
            className="px-4 py-4 font-bold text-lg border-blue-200   border-2 rounded  w-full outline-none   "
          />

          <textarea
            onChange={(e) => {
              setdetails(e.target.value);
            }}
            value={details}
            name=""
            id=""
            placeholder="Enter Details"
            className="px-4 h-32 font-bold text-lg border-blue-200   py-3  border-2 w-full rounded outline-none"
          ></textarea>

          <button className="px-10 py-2  bg-blue-500 outline-none  text-white font-bold rounded text-lg active:scale-95">
            Add note
          </button>
        </form>
      </div>
      <div className="h-full overflow-hidden p-5  w-[58%] bg-blue-900/20 rounded">
        <h1 className="text-2xl font-bold mb-5 ">Recent Notes :</h1>
        <div className="scroll flex flex-wrap gap-4 h-full overflow-auto">
          {alltask.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-80 w-80 p-20 font-bold leading-tight bg-[url(https://imgs.search.brave.com/G--QUswQ7GiYSpxk5940TURE6IxiMROjX2VyHQUJDY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/MDQ0LzI0NC9zbWFs/bC9zdGlja3ktbm90/ZXMtZm9yLXJlbWlu/ZGVycy1mcmVlLXBu/Zy5wbmc)]  rounded-2xl bg-cover"
              >
                <h2 className="text-sm w-full flex gap-2 items-center">
                  <FaRegArrowAltCircleRight /> {elem.title}
                </h2>{" "}
                <br />
                <p className="text-sm  w-full flex gap-2 items-center">
                  <FaRegArrowAltCircleRight /> {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
