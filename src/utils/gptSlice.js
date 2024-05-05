import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesName: null,
    tmdbMoviesResult: null,
  },
  reducers: {
    updatePgtState: state => {
      state.showGptSearch = !state.showGptSearch;
    },
    addTmdbMoviesResults: (state, action) => {
      const { moviesName, tmdbMoviesResult } = action.payload;
      state.moviesName = moviesName;
      state.tmdbMoviesResult = tmdbMoviesResult;
    },
  },
});

export const { updatePgtState, addTmdbMoviesResults } = gptSlice.actions;

export default gptSlice.reducer;
