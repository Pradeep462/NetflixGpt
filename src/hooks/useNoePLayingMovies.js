import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPLayingMovies } from "../utils/movieSlice";

const useNowPLayingMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    let apiData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    apiData = await apiData.json();
    dispatch(addNowPLayingMovies(apiData.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useNowPLayingMovies;
