import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/tmdbApi';
import css from './MovieCast.module.css';

const defaultImg = `https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg`;

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);
    getMovieCredits(movieId)
      .then(data => setCast(data.cast))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.cast}>
      <h3>Cast</h3>

      {isLoading && <p>Loading cast...</p>}

      {!isLoading && cast.length === 0 && (
        <p>No cast information available.</p>
      )}

      {!isLoading && cast.length > 0 && (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={100}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieCast;