import React, { useEffect, useState } from "react";
import image1 from "./assets/gif.gif";
import { FaRegArrowAltCircleRight, FaTrash } from "react-icons/fa";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [alltask, setAlltask] = useState([]);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setAlltask(savedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(alltask));
  }, [alltask]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAlltask((prev) => [...prev, { title, details }]);
    setTitle("");
    setDetails("");
  };

  const deleteTask = (index) => {
    setAlltask(alltask.filter((_, i) => i !== index));
  };

  return (
    <div
      className="h-screen w-full flex justify-between p-5"
      style={{ background: "linear-gradient(lightblue, darkblue)" }}
    >
      {/* LEFT SECTION */}
      <div className="w-[40%] h-full">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 mt-10 bg-white/20 backdrop-blur-xl p-6 rounded-2xl"
        >
          <h1 className="text-3xl font-semibold text-white">Add Notes</h1>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="px-4 py-3 text-lg font-semibold rounded outline-none"
          />

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter details"
            className="px-4 py-3 h-32 text-lg font-semibold rounded outline-none resize-none"
          ></textarea>

          <button
            disabled={!title || !details}
            className={`py-3 rounded font-bold text-lg transition-all
              ${
                !title || !details
                  ? "bg-gray-400 cursor-not-allowed outline-none"
                  : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 outline-none"
              }`}
          >
            Add Note
          </button>
        </form>
        <div className="h-[25rem] w-full overflow-hidden">
          <marquee direction="right">
            <img className="h-[25rem]" src={image1} alt="gif" />
          </marquee>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[58%] bg-blue-900/20 rounded-2xl p-5 overflow-hidden">
        <h1 className="text-2xl font-bold text-white mb-5">Recent Notes</h1>

        {alltask.length === 0 && (
          <p className="text-center text-white/60 mt-20">
            No notes yet. Add your first note ✍️
          </p>
        )}

        <div className="flex flex-wrap gap-4 overflow-auto h-[90%] pr-2">
          {alltask.map((elem, idx) => (
            <div
              key={idx}
              className="relative w-72 h-72 p-16 rounded-2xl bg-[url(https://imgs.search.brave.com/G--QUswQ7GiYSpxk5940TURE6IxiMROjX2VyHQUJDY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/MDQ0LzI0NC9zbWFs/bC9zdGlja3ktbm90/ZXMtZm9yLXJlbWlu/ZGVycy1mcmVlLXBu/Zy5wbmc)] bg-cover
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animation: "fadeIn 0.4s ease",
              }}
            >
              <button
                onClick={() => deleteTask(idx)}
                className="absolute top-3 right-3 text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
              >
                <FaTrash size={14} />
              </button>

              <h2 className="text-sm font-bold flex items-center gap-2">
                <FaRegArrowAltCircleRight />
                {elem.title}
              </h2>

              <p className="text-sm mt-3 flex items-start gap-2 line-clamp-4">
                <FaRegArrowAltCircleRight />
                {elem.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
