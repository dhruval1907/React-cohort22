import React from "react";

const Contact = () => {
  return (
    <div className="h-[80%] w-full flex flex-col gap-10 items-center  ">
      <h1 className="text-white font-bold nav text-3xl">Priorities go first</h1>
      <p className="text-white font-semibold w-[50%] text-center text-lg">
        We believe meaningful experiences begin with intention. Every detail is
        thoughtfully curated to deliver balance, creativity, and excellence— so
        what matters most always comes first.
      </p>
      <div className="h-[40%] w-[70%] flex gap-4">
        <div className="h-[100%] w-1/2 bg-[#252525] flex flex-col gap-2 items-center justify-center rounded-xl">
          <h1 className="text-red-900 text-2xl  font-bold nav2">
            SPECIAL GUEST
          </h1>
          <p className="w-[50%] text-center text-white/50 ">
            “Art is not what you see, but what you make others feel.”
          </p>
          <h4 className="w-[50%] text-center text-white/50 nav text-lg">
            Guest Artist <br /> Arjun Malhotra
          </h4>
          <h4 className="w-[50%] text-center text-white/50"></h4>
        </div>
        <div className="h-[100%] w-1/2 bg-[#252525] flex flex-col gap-2 items-center justify-center rounded-xl">
          <h1 className="text-red-900 text-2xl  font-bold nav2">
            SPECIAL GUEST
          </h1>
          <p className="w-[50%] text-center text-white/50">
            “Music is the space between emotion and silence.”
          </p>
          <h4 className="w-[50%] text-center text-white/50 nav text-lg">
            Guest artist <br /> Rhea Kapoor
          </h4>
        </div>
      </div>
      <div className="h-[40%] w-[70%] flex gap-4 ">
        <div className="h-[100%] w-1/2 bg-[#252525] flex flex-col gap-2 items-center justify-center rounded-xl">
          <h1 className="text-red-900 text-2xl  font-bold nav2">
            SPECIAL GUEST
          </h1>
          <p className="w-[50%] text-center text-white/50">
            “Every performance is a conversation with the audience.”
          </p>
          <h4 className="w-[50%] text-center text-white/50 nav text-lg">
            Guest artist <br /> Kunal Verma
          </h4>
          <h4 className="w-[50%] text-center text-white/50"></h4>
        </div>
        <div className="h-[100%] w-1/2 bg-[#252525] flex flex-col gap-2 items-center justify-center rounded-xl">
          <h1 className="text-red-900 text-2xl  font-bold nav2">
            SPECIAL GUEST
          </h1>
          <p className="w-[50%] text-center text-white/50">
            “Design is intelligence made visible.”
          </p>
          <h4 className="w-[50%] text-center text-white/50 nav text-lg">
            Guest artist <br /> Ananya Desai
          </h4>
          <h4 className="w-[50%] text-center text-white/50"></h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
