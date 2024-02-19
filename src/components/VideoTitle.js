import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="pt-36 px-12 font-sans">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/3">{desc}</p>
      <div className="">
        <button className=" w-24 p-3 m-2 font-bold text-black bg-white border rounded-md">
          ▶️ Play
        </button>
        <button className=" w-28 p-3 m-2 font-bold text-white bg-gray-600 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
