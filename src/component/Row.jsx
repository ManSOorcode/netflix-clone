/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import axiosUrl from "../api/axios";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [rowMovies, setRowMovies] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMovies() {
      //   console.log(fetchUrl);
      const response = await axiosUrl.get(fetchUrl);
      setRowMovies(response.data.results);
      return response;
    }

    fetchMovies();
    return () => abortController.abort();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  //   console.log(rowMovies.backdrop_path);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {rowMovies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
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
        )}
      </div>
    </div>
  );
};

export default Row;
