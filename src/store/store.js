import { configureStore } from "@reduxjs/toolkit";
import { authSlice, moviesDataSlice, moviesIdSlice } from "./reducer";

const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    id: moviesIdSlice.reducer,
    movie: moviesDataSlice.reducer,
  },
});
export default store;
