
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTvPopularMovies: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrendingMovies: `trending/movie/day?api_key=${API_KEY}&language=en-US`,
  fetchNowPlayingMovies:  `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
};

export default requests;

