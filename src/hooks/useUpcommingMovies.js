import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcommongMovies } from "../utils/movieSlice";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    let apiData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    apiData = await apiData.json();
    dispatch(addUpcommongMovies(apiData.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useUpcommingMovies;
