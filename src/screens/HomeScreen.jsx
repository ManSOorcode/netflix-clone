import Requestfunction from "../api/Request";

import Banner from "../component/Banner";
import "./HomeScreen.css";
import Nav from "../component/Nav";
import Row from "../component/Row";
import { useDispatch } from "react-redux";
import { movieTrailer } from "../store/reducer";
import { useState } from "react";

const HomeScreen = () => {
  const [isTrailer, setTrailer] = useState("");
  const moviedataBase = Requestfunction();

  const dispatch = useDispatch();

  const clickhandler = (id, type, index) => {
    console.log(isTrailer);

    console.log(isTrailer === index);

    if (isTrailer === index) {
      setTrailer("");
    } else {
      dispatch(movieTrailer({ id: id, type: type }));
      setTrailer(index);
    }
  };

  return (
    <div className="homeScreen">
      {/*Navigation */}
      <Nav />

      {/*Banner */}
      <Banner />

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
    </div>
  );
};

export default HomeScreen;
