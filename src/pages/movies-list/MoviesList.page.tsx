import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import {
  Container,
  MACard,
  MAGridBox,
  LoaderWrapper,
  NoItemComponent,
  IsVisible,
  PageWrapper,
} from "components";
// SLICES
import { selectMovies } from "store/movies/movies.slice";

const MoviesListPage = () => {
  const moviesStore = useSelector(selectMovies);
  const navigate = useNavigate();

  const { movies, isLoading, hasData } = moviesStore;

  const handleInfoClick = (id: number) => navigate(`/movie/${id}`);

  function renderMoviesItem(item: any) {
    return (
      <MACard
        item={item}
        onButtonClick={handleInfoClick}
        imgHeight={200}
      />
    );
  }

  return (
    <Container>
      <PageWrapper>
        <IsVisible isVisible={!hasData}>
          <NoItemComponent text="No movies" />
        </IsVisible>
        <LoaderWrapper isLoading={!!isLoading}>
          <MAGridBox
            items={movies}
            renderItem={renderMoviesItem}
            columnCount={4}
          />
        </LoaderWrapper>
      </PageWrapper>
    </Container>
  );
};

export default MoviesListPage;
