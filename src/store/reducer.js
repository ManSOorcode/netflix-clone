import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./action";

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
  },
});

export const bannerMovieSlice = createSlice({
  name: "banner",
  initialState: {
    isLoading: false,
    movieData: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.movieData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { login, logout } = authSlice.actions;
export const { movieTrailer } = moviesIdSlice.actions;
export const { bannerMovieInit, bannerMovieSuccess, bannerMovieFail } =
  bannerMovieSlice.actions;
