import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../api/Request";
import axiosUrl from "../api/axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const request = await axiosUrl.get(requests.fetchNetflixOriginals);

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();

    return () => abortController.abort();
  }, []);

  // console.log(movies?.backdrop_path);

  const descriptionModification = (description, value) => {
    // console.log(description?.length);

    return description?.length > value
      ? `${description?.substr(0, 100 - 1)}...`
      : description;
  };

  // console.log(movies);

  return (
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
        // backgroundAttachment: "fixed",

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
  );
};

export default Banner;
