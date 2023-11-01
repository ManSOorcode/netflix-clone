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
    movieTrailerAlready(state) {
      state.movieId = {};
    },
  },
});

export const moviesDataSlice = createSlice({
  name: "movies",
  initialState: {
    movie: [],
  },
  reducers: {
    movies(state, action) {
      console.log(action.payload);
      state.movie = [...action.payload];
    },
  },
});

// console.log(initialState.movieId);

export const { login, logout } = authSlice.actions;
export const { movieTrailer, movieTrailerAlready } = moviesIdSlice.actions;
export const { movies } = moviesDataSlice.actions;
