import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

// * Authentication slicer
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

// * Movies and Tv Id slicer
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
    movieTrailerAlready(state) {
      state.movieId = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export const { movieTrailer, movieTrailerAlready } = moviesIdSlice.actions;
