/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import axiosUrl from "../api/axios";
import "./Row.css";

// import { useDispatch } from "react-redux";
// import { movieTrailer, movieTrailerAlready } from "../store/reducer";
import Trailer from "./Trailer";
import { useDispatch } from "react-redux";
import { movies } from "../store/reducer";

const Row = ({
  title,
  fetchUrl,
  isLargeRow,
  type,
  youtubeHandler,
  trailer,
}) => {
  const [rowMovies, setRowMovies] = useState([]);

  const dispatch = useDispatch();

  // const mediaType = "tv";

  // console.log(rowMovies[1]);
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchMovies() {
      //   console.log(fetchUrl);
      const response = await axiosUrl.get(fetchUrl);
      // dispatch(movies(response.data.results));
      setRowMovies(response.data.results);

      return response;
    }

    fetchMovies();
    return () => abortController.abort();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  // console.log(trailer);

  // console.log(youtubeHandler);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {rowMovies?.map((movie) => {
          // console.log(
          //   (isLargeRow && movie.poster_path) ||
          //     (!isLargeRow && movie.backdrop_path)
          // );
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() =>
                  youtubeHandler(
                    movie.id,
                    movie.media_type
                      ? movie.media_type === type
                        ? type
                        : movie.media_type
                      : type
                  )
                }
                className={`row_poster ${isLargeRow && `row_posterLarge`}`}
                key={movie.id}
                src={`${baseUrl}${
                  isLargeRow
                    ? movie?.poster_path
                    : //   ? movie?.poster_path
                      //   : ""
                      movie?.backdrop_path
                  // ? movie?.backdrop_path
                  // : ""
                }`}
                alt={movie.name}
              />
            )
          );
        })}
      </div>
      {trailer && <Trailer />}
    </div>
  );
};

export default Row;
