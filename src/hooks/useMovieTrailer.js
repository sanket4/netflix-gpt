import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailerList = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );

    const official_trailer = trailerList ? trailerList[0] : json.results[0];
    console.log("official_trailer", official_trailer);

    dispatch(addMovieTrailer(official_trailer));
  };

  useEffect(() => {
    movieVideos();
  }, []);
};

export default useMovieTrailer;
