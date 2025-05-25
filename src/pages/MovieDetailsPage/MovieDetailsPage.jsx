import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/tmdbApi';
import css from './MovieDetailsPage.module.css';

const defaultImg =
  `https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg`;

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <div className={css.details}>
      <Link to={backLinkRef.current}>← Go back</Link>

      <div className={css.wrapper}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          width={250}
        />

        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Genres:</strong>{' '}
            {movie.genres?.map(g => g.name).join(', ') || 'No genres info'}
          </p>
        </div>
      </div>

      <hr />
      <p>Additional information:</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;