// import { useSelector } from "react-redux";

const API_KEY = "9012f7ec15dcb2b9d3e6e61f49989dd9";

const Requestfunction = () => {
  const moviedataBase = [
    {
      id: 1,
      title: "NETFLIX ORIGINALS",
      fetch: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      isLargeRow: true,
      type: "tv",
    },
    {
      id: 2,
      title: "Tranding Now",
      fetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      isLargeRow: false,
      type: "movie",
    },
    {
      id: 3,
      title: "Top Rated",
      fetch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      isLargeRow: false,
      type: "movie",
    },
    {
      id: 4,
      title: "Action Movies",
      fetch: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      isLargeRow: false,
      type: "movie",
    },
    {
      id: 5,
      title: "Comedy Movies",
      fetch: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      isLargeRow: false,
      type: "movie",
    },
    {
      id: 6,
      title: "Horror Movies",
      fetch: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      isLargeRow: false,
      type: "movie",
    },
    {
      id: 7,
      title: "Documentaries",
      fetch: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc&with_genres=99`,
      isLargeRow: false,
      type: "movie",
    },
    // {
    //   id: 8,
    //   title: "Romance Movies",
    //   fetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    //   isLargeRow: false,
    //   type: "movie",
    // },
  ];

  return moviedataBase;
};

export default Requestfunction;
