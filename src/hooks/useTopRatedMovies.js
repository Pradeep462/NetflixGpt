import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    let apiData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    apiData = await apiData.json();
    dispatch(addTopRatedMovies(apiData.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useTopRatedMovies;
