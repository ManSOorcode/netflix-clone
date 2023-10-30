// import React from "react";

import Requestfunction from "../api/Request";

import Banner from "../component/Banner";
import "./HomeScreen.css";
import Nav from "../component/Nav";
import Row from "../component/Row";

import Trailer from "../component/Trailer";

const HomeScreen = () => {
  const requests = Requestfunction();

  return (
    <div className="homeScreen">
      <Nav />
      {/*Banner */}
      <Banner />
      {/*Trailer */}
      <Trailer />

      {/*Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        type="tv"
      />
      <Row
        title="Tranding Now"
        fetchUrl={requests.fetchTrending}
        type="movie"
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} type="movie" />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        type="movie"
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        type="movie"
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        type="movie"
      />
      {/* <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        type="movie"
      /> */}
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        type="movie"
      />
      {/* <Row title='Tranding Now' fetchUrl={request.fetchTranding}/> */}
    </div>
  );
};

export default HomeScreen;
