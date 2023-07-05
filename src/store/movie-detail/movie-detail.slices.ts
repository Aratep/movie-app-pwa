import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ROOT REDUCER
import { RootState } from "store/root-reducers";

// MOVIE INTERFACE
export interface IMovie {
  Poster: string;
  Title: string;
  Awards: string;
  Genre: string;
  Country: string;
  Actors: string;
  Plot: string;
  Year: string;
  imdbRating: string;
}

// DEFINE MOVIE DETAIL STATE
interface MovieDetailState {
  movie?: IMovie;
  isLoading?: boolean;
  error?: string;
}

// INITIAL STATE
const initialState: MovieDetailState = {
  movie: {
    Poster: "",
    Title: "",
    Awards: "",
    Genre: "",
    Country: "",
    Actors: "",
    Plot: "",
    Year: "",
    imdbRating: "",
  },
  isLoading: false,
  error: "",
};

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    getMovieDetailStartReducer: state => {
      state.isLoading = true;
    },
    getMovieDetailSuccessReducer: (state, { payload }: PayloadAction<MovieDetailState>) => {
      state.movie = payload.movie;
      state.isLoading = false;
    },
    getMovieDetailFailedReducer: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  getMovieDetailStartReducer,
  getMovieDetailSuccessReducer,
  getMovieDetailFailedReducer,
} = movieDetailSlice.actions;

export const selectMovieDetail = (state: RootState) => state.movieDetail;
