import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => { console.log('Trending Movies:', data); setMovies(data.results) });
  }, []);

  return (
    <div className={css.home}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
