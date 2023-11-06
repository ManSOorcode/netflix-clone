import { configureStore } from "@reduxjs/toolkit";
import { authSlice, bannerMovieSlice, moviesIdSlice } from "./reducer";

const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    id: moviesIdSlice.reducer,
    banner: bannerMovieSlice.reducer,
  },
});
export default store;
