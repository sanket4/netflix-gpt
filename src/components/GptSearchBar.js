import React, { useState } from "react";

const GptSearchBar = () => {
  return (
    <div className=" pt-[10%] flex justify-center">
      <form className="w-1/2 bg-transparent grid grid-cols-12">
        <input
          type="text"
          className=" rounded-md p-4 m-4 border bg-gray-800 opacity-70 text-white font-semibold col-span-9"
          placeholder="What would you like to watch today..?"
        />
        <button className="font-bold m-4 border text-white bg-red-800 rounded-md opacity-70 col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
