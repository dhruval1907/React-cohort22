import React from "react";

const Card = () => {
  return (
    <div className="bg-white h-[60%] w-[22%] rounded-xl p-1 relative flex flex-wrap">
      <div className="w-[100%] h-[35%]">
        <img
          className="h-full w-full object-cover  rounded-2xl"
          src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="w-full h-[65%] text-center flex flex-col items-center  gap-2">
        <img className="absolute h-[100px] w-[100px] top-[25%] left-[35%]   rounded-full"  src="https://images.unsplash.com/photo-1615843423179-bea071facf96?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className="font-bold mt-16 text-3xl">Noah Thomsan </h1>
        <p className="w-[90%] font-medium ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fuga, optio ex quasi non sunt!</p>
        <div className="w-[90%] bg-white shadow-xl h-[700px] mt-10 flex items-end p-6 ">
            <div className="flex items-center justify-evenly w-full h-full">
                <div>
                    <h1 className="font-bold text-xl">72.8k</h1>
                    <h4 className="font-bold text-normal opacity-[0.5]">Likes</h4>
                </div>
                <div>
                    <h1 className="font-bold text-xl">828</h1>
                    <h4 className="font-bold text-normal opacity-[0.5]">posts</h4>
                </div>
                <div>
                    <h1 className="font-bold text-xl">349.8k</h1>
                    <h4 className="font-bold text-normal opacity-[0.5]">views</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
