import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import { ReviewsItem, RewievsText, ReviewsAuthor } from './Reviews.styled.jsx';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  if (reviews.length === 0) {
    return "Reviews not found";
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id}>
          <ReviewsAuthor>Author: {author}</ReviewsAuthor>
          <RewievsText>{content}</RewievsText>
        </ReviewsItem>
      ))}
    </ul>
  );
};

export default Reviews;