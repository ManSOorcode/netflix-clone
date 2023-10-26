// import React from "react";

import requests from "../api/Request";

import Banner from "../component/Banner";
import "./HomeScreen.css";
import Nav from "../component/Nav";
import Row from "../component/Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      {/*Banner */}
      <Banner />
      {/*Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Row title='Tranding Now' fetchUrl={request.fetchTranding}/> */}
    </div>
  );
};

export default HomeScreen;
