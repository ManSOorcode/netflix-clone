import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const moviesIdSlice = createSlice({
  name: "id",
  initialState: {
    movieId: {},
  },
  reducers: {
    movieTrailer(state, action) {
      console.log(action.payload);
      state.movieId = { ...action.payload };
    },
  },
});

// console.log(initialState.movieId);

export const { login, logout } = authSlice.actions;
export const { movieTrailer } = moviesIdSlice.actions;
