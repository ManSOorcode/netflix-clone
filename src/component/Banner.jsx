/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./Banner.css";

import { useDispatch, useSelector } from "react-redux";
import fetchData from "../store/action";

const Banner = () => {
  const {
    isLoading,
    movieData: movies,
    error,
  } = useSelector((state) => state.banner);

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchData());

    return () => abortController.abort();
  }, []);

  const descriptionModification = (description, value) => {
    return description?.length > value
      ? `${description?.substr(0, 100 - 1)}...`
      : description;
  };

  return (
    <>
      {isLoading ? (
        <p className="loaddingScreen">Loadding...</p>
      ) : (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",

            backgroundImage: error
              ? `${`url(${error})`}`
              : `${
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
      )}
    </>
  );
};

export default Banner;
