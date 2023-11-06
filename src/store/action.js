import { createAsyncThunk } from "@reduxjs/toolkit";
import Requestfunction from "../api/Request";
import axiosUrl from "../api/axios";

const moviedataBase = Requestfunction();

const netFlixUrl = moviedataBase[0].fetch;
const errorImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsYUo0ARJu00LyyzWPxy0NhLHE2dK_KMPkA&usqp=CAU";

/*createAsyncThunk returns a standard Redux thunk action creator. The thunk action creator 
function will have plain action creators for the pending, fulfilled, and rejected cases attached as nested fields. */

//in Short createAsyncThunk return pending, fulfilled, and rejected cases

const fetchData = createAsyncThunk("banner/fetchData", async () => {
  try {
    const request = await axiosUrl.get(netFlixUrl);

    const singleMovieData =
      request.data?.results[
        Math.floor(Math.random() * request.data.results?.length - 1)
      ];

    return singleMovieData;
  } catch (error) {
    return errorImage;
  }
});

export default fetchData;
