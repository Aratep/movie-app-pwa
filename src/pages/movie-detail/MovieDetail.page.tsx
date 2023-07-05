import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// COMPONENTS
import { Container, LoaderWrapper, MADetailCard, PageWrapper } from "components";
// STORE
import { useAppDispatch } from "store";
// SLICES
import { selectMovieDetail } from "store/movie-detail/movie-detail.slices";
// ACTIONS
import { getMovieDetailAsync } from "store/movie-detail/movie-detail.actions";
// UTILS
import { movieDetailItems } from "utils/constants";

const MovieDetailPage = () => {
  const dispatch = useAppDispatch();
  const movieDetailStore = useSelector(selectMovieDetail);

  const { isLoading, movie } = movieDetailStore;

  let { imdbID } = useParams();

  useEffect(() => {
    imdbID && dispatch(getMovieDetailAsync(imdbID));
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <PageWrapper>
        <LoaderWrapper isLoading={!!isLoading}>
          <MADetailCard
            item={movie}
            visibleInfoItems={movieDetailItems}
          />
        </LoaderWrapper>
      </PageWrapper>
    </Container>
  );
};

export default MovieDetailPage;
