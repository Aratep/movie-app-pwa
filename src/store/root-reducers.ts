import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// SLICES
import { moviesSlice } from "store/movies/movies.slice";
import { movieDetailSlice } from "store/movie-detail/movie-detail.slices";

// PERSIST CONFIG
import { persistConfig } from "store/persist-config";

const rootReducers = combineReducers({
  movies: moviesSlice.reducer,
  movieDetail: movieDetailSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default persistReducer(persistConfig, rootReducers);
