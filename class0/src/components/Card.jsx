import React from "react";
import { motion } from "motion/react";
import { useRef } from "react";

const Card = () => {
  const users = [
    {
      image:
        "https://images.unsplash.com/photo-1642456074142-92f75cb84533?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "spider-man",
      p: "Lorem ipsum dolor sit amrta ",
      likecount: "72.9k",
      posts: "256",
      views: "453k",
    },
    {
      image:
        "https://images.unsplash.com/photo-1708376368427-ede2b537d494?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "marvel",
      p: "Lorem ipsum dolor sit amrta ",
      likecount: "7.9k",
      posts: "26",
      views: "43k",
    },
  ];

  const constraintsRef = useRef(null);
  return (
    <div
      ref={constraintsRef}
      className="h-screen w-full flex flex-wrap p-4 gap-4 overflow-hidden"
    >
      {users.map((elem, indx) => (
        <motion.div
          drag
          key={indx}
          dragConstraints={constraintsRef}
          className="h-[45%] w-[18%] bg-white rounded-xl overflow-hidden "
        >
          <img
            className="h-[150px] w-full object-cover"
            src={elem.image}
            alt=""
          />
          <h4 className="p-4 font-semibold text-xl">{elem.name}</h4>
          <p className="p-4 font-semibold text-xl">{elem.p}</p>
          <div className="w-full h-[250px] flex items-center justify-around flex-col">
            <div className="flex">
              <div className="w-20 h-[250px] p-2">
                <h1 className="font-semibold text-normal ">{elem.likecount}</h1>
                <h4 className="opacity-[0.5] font-semibold ">Likes</h4>
              </div>
              <div className="w-20 h-[250px] p-2">
                <h1 className="font-semibold text-normal ">{elem.posts}</h1>
                <h4 className="opacity-[0.5] font-semibold ">Posts</h4>
              </div>
              <div className="w-20 h-[250px]  p-2">
                <h1 className="font-semibold text-normal ">{elem.views}</h1>
                <h4 className="opacity-[0.5] font-semibold ">Views</h4>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-500">Know more</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
