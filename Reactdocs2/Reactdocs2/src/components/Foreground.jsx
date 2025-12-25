import React from "react";
import Card from "./Card";
import { useRef } from "react";


const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTile: "Download now",
        tagcolor: "green",
      },   
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.3mb",
      close: true,
      tag: {
        isOpen: false,
        tagTile: "Download now",
        tagcolor: "green",
      },   
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.2mb",
      close: true,
      tag: {
        isOpen: false,
        tagTile: "Download now",
        tagcolor: "green",
      },   
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTile: "Download now",
        tagcolor: "green",
      },   
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.2mb",
      close: true,
      tag: {
        isOpen: false,
        tagTile: "Download now",
        tagcolor: "green",
      },   
    },
  ];

  const ref = useRef(null)

  return (
    <div ref={ref} className="fixed h-full w-full top-0 left-0 z-[2] flex gap-5 p-5">
      {data.map((item, indx) => (
        <Card key={indx} item={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
