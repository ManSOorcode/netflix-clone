/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import axiosUrl from "../api/axios";
import "./Row.css";

import { useDispatch } from "react-redux";
import { movieTrailer } from "../store/reducer";

const Row = ({ title, fetchUrl, isLargeRow = false, type }) => {
  const [rowMovies, setRowMovies] = useState([]);
  // const [isTrailerUrl, setTrailerUrl] = useState(false);
  const dispatch = useDispatch();

  // const mediaType = "tv";

  // console.log(rowMovies[1]);
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

  // console.log(rowMovies);

  const clickhandler = (id, type) => {
    // console.log(id, type, movie);
    dispatch(movieTrailer({ id: id, type: type }));
  };
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
                onClick={() =>
                  clickhandler(
                    movie.id,
                    movie.media_type
                      ? movie.media_type === type
                        ? type
                        : movie.media_type
                      : type,
                    movie
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
        )}
      </div>
    </div>
  );
};

export default Row;
