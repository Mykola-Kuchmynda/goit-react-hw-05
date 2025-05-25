import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTU5ODQyOTYyOGUyZjljOThjNTczYzNiZTljNzJmMSIsIm5iZiI6MTc0NzU3MzIyNS43NTEwMDAyLCJzdWIiOiI2ODI5ZDllOWZjNGZjOWM2ZmQ1YjU2ZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QK3UXVQ1QcXCbNqzDtdPyJtHmsNwhcx1N3A0ArU_w9s';

const options = {
  headers: {
    Authorization: ACCESS_TOKEN,
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, options);
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, options);
  return response.data;
};