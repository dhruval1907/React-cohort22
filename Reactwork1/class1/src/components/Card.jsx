import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white h-[60%] w-[22%] rounded-xl p-1 relative">
      
      {/* Cover Image */}
      <div className="w-full h-[35%]">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=1479&auto=format&fit=crop"
          alt="cover"
        />
      </div>

      {/* Content */}
      <div className="w-full h-[65%] text-center flex flex-col items-center gap-2">
        
        {/* Profile Image */}
        <img
          className="absolute h-[100px] w-[100px] top-[25%] left-[35%] rounded-full border-4 border-white object-cover"
          src={props.image}
          alt={props.name}
        />

        <h1 className="font-bold mt-16 text-3xl">{props.name}</h1>

        <p className="w-[90%] font-medium">
          {props.bio}
        </p>

        {/* Stats */}
        <div className="w-[90%] bg-white shadow-xl h-[120px] mt-6 flex items-center p-6 rounded-xl">
          <div className="flex items-center justify-evenly w-full">
            <div>
              <h1 className="font-bold text-xl">{props.likes}</h1>
              <h4 className="opacity-50">Likes</h4>
            </div>
            <div>
              <h1 className="font-bold text-xl">{props.posts}</h1>
              <h4 className="opacity-50">Posts</h4>
            </div>
            <div>
              <h1 className="font-bold text-xl">{props.views}</h1>
              <h4 className="opacity-50">Views</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


export default Card;
