import PropTypes from 'prop-types';
import {
  MovieContainer,
  MovieWrapper,
  MovieTitle,
  MovieSubTitle,
  MovieDetails,
} from './MovieInfo.styled';
import noImage from '../image/no-image.jpg';

export const MovieInfo = ({ info }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;
  const baseURL = 'https://image.tmdb.org/t/p/w300';

  const getYear = () => new Date(`${release_date}`).getFullYear();
  const getScor = () => Math.round(`${vote_average}` * 10);

  return (
    <MovieContainer>
      <img
        src={poster_path ? `${baseURL}${poster_path}` : noImage}
        alt={original_title}
        width="300"
      />
      <MovieWrapper>
        <MovieTitle>
          {original_title} ({getYear()})
        </MovieTitle>
        <MovieDetails>User Score : {getScor()}%</MovieDetails>
        <MovieSubTitle>Overview </MovieSubTitle>
        <MovieDetails>{overview}</MovieDetails>
        <MovieSubTitle>Genres</MovieSubTitle>
        <MovieDetails>
          {genres.map(genre => genre.name).join(', ')}
        </MovieDetails>
      </MovieWrapper>
    </MovieContainer>
  );
};

MovieInfo.propTypes = {
  original_title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};