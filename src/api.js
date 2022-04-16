export const getSimilarMovies = (movie_id) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
};
export const getPopularMovies = (page) => {
  return `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;
};
export const getTopRatedMovies = (page) => {
  return `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
};
export const getVideo = (movie_id) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,credits`;
};

export const getSearchMovie = (query) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
};

export const BaseImageURL = () => {
  return "https://image.tmdb.org/t/p/original";
};
