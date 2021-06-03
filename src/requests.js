const API_KEY = "f1a6e4fffbfea1527fe75b5041f83951";

export const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMystery : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWestern : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTv : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};