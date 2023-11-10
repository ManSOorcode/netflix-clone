/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import image from "../../public/vite.svg";

import axiosUrl from "../api/axios";
import "./Row.css";

import Trailer from "./Trailer";

const Row = ({
  title,
  fetchUrl,
  isLargeRow,
  type,
  youtubeHandler,
  trailer,
}) => {
  const [rowMovies, setRowMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchMovies() {
      const response = await axiosUrl.get(fetchUrl);

      setRowMovies(response.data.results);

      return response;
    }

    fetchMovies();
    return () => abortController.abort();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {rowMovies?.map((movie) => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => {
                  youtubeHandler(
                    movie.id,
                    movie.media_type
                      ? movie.media_type === type
                        ? type
                        : movie.media_type
                      : type,
                    movie.media_type === "tv" || type === "tv"
                      ? movie.name
                      : movie.title
                  );
                }}
                className={`row_poster ${isLargeRow && `row_posterLarge`}`}
                key={movie.id}
                src={`${baseUrl}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
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
