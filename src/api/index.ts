import axios from "axios";

// CONSTANTS
import { OMDBAPIKEY } from "utils/constants";

export const moviesApi = {
  // GET MOVIES
  getMovies: (searchText: string) =>
    axios.get(`http://www.omdbapi.com/?apikey=${OMDBAPIKEY}&s=${searchText}`),
  // GET SINGLE MOVIE DETAILS
  getMovieDetail: (imdbID: string) =>
    axios.get(`http://www.omdbapi.com/?apikey=${OMDBAPIKEY}&i=${imdbID}`),
};
