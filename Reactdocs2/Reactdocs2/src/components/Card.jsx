import React from "react";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "motion/react"
const Card = ({ item }) => {
  return (
    <div className="w-[280px] h-[320px] bg-zinc-800/90 rounded-3xl text-white px-6 py-10 relative overflow-hidden">
      <FaFileContract />
      <p className="text-sm font-semibold mt-5">{item.desc}</p>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-5 py-3">
          <h4 className="font-semibold">{item.filesize}</h4>
          <div className="h-10 w-10 flex items-center justify-center bg-zinc-700 rounded-full">
            <MdOutlineFileDownload />
          </div>
        </div>

        {item.tag.isOpen && (
          <div className="h-[50px] bg-green-600 flex items-center justify-center ">
            <h4 className="font-semibold">{item.tag.tagTile}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
