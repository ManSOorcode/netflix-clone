// import { useSelector } from "react-redux";

const API_KEY = "9012f7ec15dcb2b9d3e6e61f49989dd9";

const Requestfunction = () => {
  const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc&with_genres=99`,
    //trailer-API
  };
  return requests;
};

export default Requestfunction;
