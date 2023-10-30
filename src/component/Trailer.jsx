/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Trailer.css";

import axiosUrl from "../api/axios";
import { useSelector } from "react-redux";

const Trailer = () => {
  const [isTrailerId, setTrailerId] = useState("");
  const movieId = useSelector((state) => state.id.movieId);

  const API_KEY = "9012f7ec15dcb2b9d3e6e61f49989dd9";

  let url = `${movieId.type}/${movieId?.id}/videos?api_key=${API_KEY}&language=en-US`;

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

  console.log(isTrailerId);
  //   console.log(movieId);

  const opts = {
    height: "390",
    width: "100%",

    playerVars: {
      origin: "http://localhost:3000",

      autoplay: 1,
    },
  };
  return (
    <div className="trailer_container">
      <h2>TV/Movies Trailer</h2>

      {isTrailerId ? <YouTube videoId={`${isTrailerId}`} opts={opts} /> : ""}
    </div>
  );
};

export default Trailer;
