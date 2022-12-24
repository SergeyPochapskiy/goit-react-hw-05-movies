import { useLocation } from 'react-router-dom';
import { ListContainer, MovieItem, LinkTitle } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ListContainer>
      {movies.map(({ id, original_title }) => (
        <MovieItem key={id}>
          <LinkTitle to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </LinkTitle>
        </MovieItem>
      ))}
    </ListContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};