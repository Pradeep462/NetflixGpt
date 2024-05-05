import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSclice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
