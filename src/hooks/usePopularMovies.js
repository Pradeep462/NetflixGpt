import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    let apiData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    apiData = await apiData.json();
    dispatch(addPopularMovies(apiData.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default usePopularMovies;
