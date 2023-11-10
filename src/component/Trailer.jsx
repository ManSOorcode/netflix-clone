/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Trailer.css";

import axiosUrl from "../api/axios";
import { useSelector } from "react-redux";

const Trailer = () => {
  const [isTrailerId, setTrailerId] = useState("");
  const movieId = useSelector((state) => state.id.movieId);

  // console.log(movieId.movieName);

  let url = `${movieId.type}/${movieId?.id}/videos?api_key=${
    import.meta.env.VITE_MOVIE_KEY
  }&language=en-US`;

  const findingKey = (trailersArr) => {
    if (trailersArr.length === 1) {
      const [{ key }] = trailersArr;

      setTrailerId(key);
    }
    if (trailersArr.length > 1) {
      const youtubeKey = trailersArr.find((trailer) => {
        const keywords = [
          "Official Trailer",
          "ORIGINAL TRAILER",
          "Trailer",
          "Official",
          "Teaser",
        ];
        const regex = new RegExp(keywords.join("|"), "i");
        return regex.test(trailer.name);
      });
      setTrailerId(youtubeKey.key);
    } else {
      return "";
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    if (movieId.id > 0) {
      async function fetchMovies() {
        try {
          const response = await axiosUrl.get(url);

          findingKey(response.data.results);
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      }

      fetchMovies();
    }

    return () => abortController.abort();
  }, [url, movieId.id]);

  const opts = {
    height: "390",
    width: "100%",

    playerVars: {
      origin: "http://localhost:3000",

      autoplay: 1,
    },
  };
  return (
    <div className={`trailer_container`}>
      <h2>
        {movieId?.type?.toUpperCase()} {movieId?.type === "tv" ? "series " : ""}
        {movieId.movieName}
      </h2>

      <YouTube videoId={`${isTrailerId}`} opts={opts} />
    </div>
  );
};

export default Trailer;
