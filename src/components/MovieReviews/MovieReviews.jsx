import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/tmdbApi';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);
    getMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.reviews}>
      <h3>Reviews</h3>

      {isLoading && <p>Loading reviews...</p>}

      {!isLoading && reviews.length === 0 && (
        <p>No reviews available.</p>
      )}

      {!isLoading && reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p><b>{review.author}</b></p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieReviews;
