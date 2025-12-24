import React from "react";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
const Card = () => {
  return (
    <div className="w-70 h-80 bg-zinc-800/90 rounded-4xl text-white px-6 py-10 overflow-hidden relative">
      <FaFileContract />
      <p className="text-sm font-semibold mt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
      <div className="footer w-full absolute bottom-0 left-0 bg-sky-500 h-20">
        <div className="flex items-center h-full justify-between px-5">
          <h4 className=" font-semibold">.04b</h4>
          <MdOutlineFileDownload className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Card;
