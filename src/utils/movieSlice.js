import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPLayingMovie: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upCommingMovies: null,
  },
  reducers: {
    addNowPLayingMovies: (state, action) => {
      state.nowPLayingMovie = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcommongMovies: (state, action) => {
      state.upCommingMovies = action.payload;
    },
  },
});

export const {
  addNowPLayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcommongMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
