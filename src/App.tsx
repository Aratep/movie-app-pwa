import React, { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import debounce from "lodash/debounce";

// PAGES
import MoviesListPage from "pages/movies-list/MoviesList.page";
import MovieDetailPage from "pages/movie-detail/MovieDetail.page";
// COMPONENTS
import { AppHeader } from "components";
// ACTIONS
import { getMoviesAsync } from "store/movies/movies.actions";
// STORE
import { useAppDispatch } from "store";

function App() {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line
  const debounceOnChange = useCallback(debounce(onChange, 500), []);

  function onChange(value: string) {
    dispatch(getMoviesAsync(value));
  }

  return (
    <BrowserRouter>
      <AppHeader
        appTitle="IMDB"
        onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          debounceOnChange(e.target.value)
        }
      />
      <Routes>
        <Route
          path="/"
          element={<MoviesListPage />}
        />
        <Route path="movie">
          <Route
            path=":imdbID"
            element={<MovieDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
