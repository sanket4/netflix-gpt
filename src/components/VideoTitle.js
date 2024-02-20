import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="pt-[15%] px-24 text-white font-sans absolute bg-gradient-to-b from-transparent">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/3">{desc}</p>
      <div className="flex">
        <button className="flex items-center  w-auto p-3 m-2 font-bold text-black bg-white rounded-md hover:opacity-80">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </span>
          <span>Play</span>
        </button>
        <button className="flex items-center w-auto p-3 m-2 font-bold text-white bg-gray-800 rounded-md hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
