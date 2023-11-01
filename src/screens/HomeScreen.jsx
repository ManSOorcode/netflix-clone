// import React from "react";

import Requestfunction from "../api/Request";

import Banner from "../component/Banner";
import "./HomeScreen.css";
import Nav from "../component/Nav";
import Row from "../component/Row";
import { useDispatch } from "react-redux";
import { movieTrailer } from "../store/reducer";
import { useState } from "react";

// import Trailer from "../component/Trailer";

const HomeScreen = () => {
  const [isTrailer, setTrailer] = useState("");
  const { moviedataBase, requests } = Requestfunction();

  const dispatch = useDispatch();

  const clickhandler = (id, type, index) => {
    console.log(isTrailer);

    console.log(isTrailer === index);

    if (isTrailer === index) {
      // dispatch(movieTrailerAlready());
      setTrailer("");
    } else {
      dispatch(movieTrailer({ id: id, type: type }));
      setTrailer(index);
    }
  };

  // console.log(clickhandler);

  return (
    <div className="homeScreen">
      <Nav />
      {/*Banner */}
      <Banner />
      {/*Trailer */}

      {/*Row */}
      {moviedataBase?.map((movieRequest, index) => (
        <Row
          key={movieRequest.id}
          id={movieRequest.id}
          title={movieRequest.title}
          fetchUrl={movieRequest.fetch}
          isLargeRow={movieRequest.isLargeRow}
          type={movieRequest.type}
          youtubeHandler={(id, type) => clickhandler(id, type, index)}
          trailer={index === isTrailer}
        />
      ))}
      {/* <Row
        title="Tranding Now"
        fetchUrl={requests.fetchTrending}
        type="movie"
        youtubeHandler={clickhandler}
        trailer={isTrailer}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        type="movie"
        youtubeHandler={clickhandler}
        trailer={isTrailer}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        type="movie"
        youtubeHandler={clickhandler}
        trailer={isTrailer}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        type="movie"
        youtubeHandler={clickhandler}
        trailer={isTrailer}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        type="movie"
        youtubeHandler={clickhandler}
        trailer={isTrailer}
      /> */}
      {/* <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        type="movie"
      /> */}
      {/* <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        type="movie"
        youtubeHandler={clickhandler}
        trailer={isTrailer}
      /> */}
      {/* <Row title='Tranding Now' fetchUrl={request.fetchTranding}/> */}
    </div>
  );
};

export default HomeScreen;
