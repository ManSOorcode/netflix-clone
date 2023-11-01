/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Banner.css";
import Requestfunction from "../api/Request";
import axiosUrl from "../api/axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const moviedataBase = Requestfunction();

  const netFlixUrl = moviedataBase[0].fetch;

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const request = await axiosUrl.get(netFlixUrl);

      setMovies(
        request.data?.results[
          Math.floor(Math.random() * request.data.results?.length - 1)
        ]
      );

      return request;
    }

    fetchData();

    return () => abortController.abort();
  }, []);

  const descriptionModification = (description, value) => {
    return description?.length > value
      ? `${description?.substr(0, 100 - 1)}...`
      : description;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",

          backgroundImage: `${
            movies?.backdrop_path
              ? `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
              : ""
          }`,
          backgroundPosition: "center center",

          objectFit: "contain",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">{movies?.name}</h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {descriptionModification(movies?.overview, 100)}
          </h1>
        </div>
        <div className="banner_fadeBottom" />
      </header>
    </>
  );
};

export default Banner;
