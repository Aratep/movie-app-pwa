import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ROOT REDUCER
import { RootState } from "store/root-reducers";

// MOVIE INTERFACE
export interface IMovies {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

// DEFINE MOVIES STATE
interface MoviesState {
  movies?: IMovies[];
  isLoading?: boolean;
  hasData?: boolean;
  error?: string;
}

// INITIAL STATE
const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  hasData: false,
  error: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesStartReducer: state => {
      state.isLoading = true;
    },
    getMoviesSuccessReducer: (state, { payload }: PayloadAction<MoviesState>) => {
      state.movies = payload.movies;
      state.isLoading = false;
    },
    getMoviesFailedReducer: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
    toggleHasDataReducer: (state, { payload }: PayloadAction<MoviesState>) => {
      state.hasData = payload.hasData;
    },
  },
});

export const {
  getMoviesStartReducer,
  getMoviesSuccessReducer,
  getMoviesFailedReducer,
  toggleHasDataReducer,
} = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies;
