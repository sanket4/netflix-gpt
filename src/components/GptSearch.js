import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute flex-1 flex justify-center items-center bg-cover bg-center -z-10">
        <img src={BACKGROUND_IMAGE} />
      </div>
      <GptSearchBar />
      <GptSearchResults />
    </div>
  );
};

export default GptSearch;
