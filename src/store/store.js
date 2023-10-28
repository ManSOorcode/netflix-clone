import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer";

const store = configureStore({ reducer: { user: authSlice.reducer } });
export default store;
