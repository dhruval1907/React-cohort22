import React from "react";

const Card = ({ name, image, bio, likes, posts, views }) => {
  return (
    <div className="bg-white h-[520px] w-[22%] rounded-xl p-2 relative">
      
      {/* Cover */}
      <div className="w-full h-[35%]">
        <img
          className="h-full w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=1200"
          alt="cover"
        />
      </div>

      {/* Body */}
      <div className="w-full h-[65%] text-center flex flex-col items-center gap-2">

        {/* Profile Image */}
        <img
          className="absolute h-[100px] w-[100px] top-[28%] left-1/2 -translate-x-1/2 rounded-full border-4 border-white object-cover"
          src={image}
          alt={name}
        />

        <h1 className="font-bold mt-16 text-2xl">{name}</h1>

        <p className="w-[90%] text-sm opacity-80">
          {bio}
        </p>

        {/* Stats */}
        <div className="w-[90%] bg-white shadow-xl h-[110px] mt-4 flex items-center p-4 rounded-xl">
          <div className="flex justify-evenly w-full">
            <div>
              <h1 className="font-bold">{likes}</h1>
              <p className="text-sm opacity-50">Likes</p>
            </div>
            <div>
              <h1 className="font-bold">{posts}</h1>
              <p className="text-sm opacity-50">Posts</p>
            </div>
            <div>
              <h1 className="font-bold">{views}</h1>
              <p className="text-sm opacity-50">Views</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};




export default Card;
