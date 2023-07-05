// SLICES
import {
  getMovieDetailStartReducer,
  getMovieDetailSuccessReducer,
  getMovieDetailFailedReducer,
} from "store/movie-detail/movie-detail.slices";
// STORE
import { AppThunk } from "store";
// API
import { moviesApi } from "api";

// GET MOVIES
export const getMovieDetailAsync =
  (id: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(getMovieDetailStartReducer());

      const resp = await moviesApi.getMovieDetail(id);
      const movie = resp.data;

      dispatch(getMovieDetailSuccessReducer({ movie }));
    } catch (error: any) {
      dispatch(getMovieDetailFailedReducer(error));
    }
  };
