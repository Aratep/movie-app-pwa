// SLICES
import {
  getMoviesStartReducer,
  getMoviesSuccessReducer,
  getMoviesFailedReducer,
  toggleHasDataReducer,
} from "store/movies/movies.slice";
// STORE
import { AppThunk } from "store";
// API
import { moviesApi } from "api";

// GET MOVIES
export const getMoviesAsync =
  (text: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(getMoviesStartReducer());

      const resp = await moviesApi.getMovies(text);
      const movies = resp.data;

      if (movies.Response === "True") {
        dispatch(toggleHasDataReducer({ hasData: true }));
      } else {
        dispatch(toggleHasDataReducer({ hasData: false }));
      }

      dispatch(getMoviesSuccessReducer({ movies: movies.Search || [] }));
    } catch (error: any) {
      console.log(error.message);
      dispatch(getMoviesFailedReducer(error));
    }
  };
