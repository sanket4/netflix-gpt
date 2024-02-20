import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS, UP_COMING_MOVIES } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    const data = await fetch(UP_COMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
};

export default useUpComingMovies;
