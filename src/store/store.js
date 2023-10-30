import { configureStore } from "@reduxjs/toolkit";
import { authSlice, moviesIdSlice } from "./reducer";

const store = configureStore({
  reducer: { user: authSlice.reducer, id: moviesIdSlice.reducer },
});
export default store;
