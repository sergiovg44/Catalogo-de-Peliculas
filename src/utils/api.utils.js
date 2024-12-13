import { apiConfig, objectIdMovie } from "../config";



export function getMoviePosterUrl(path, width = 400) {
  return `${apiConfig.posterBaseUrl}/w${width}/${path}`;
}

export function getMovieBackdropUrl(path) {
  return `${apiConfig.backdropBaseUrl}${path}`;
}

 export async function fetchMoviesData(url) {
  const response = await fetch(url);
  const data = await response.json();
// console.log (data.results)
  if (data?.success === false)
    throw new Error(
      `Error: ${data?.status_message ?? "something whent wrong"}`
    );

  return data;
}


export function getMovieListUrl(movieListType, page = 1) {
  // Primera parte de la url la parte que no cambia
  let movieListUrl = apiConfig.baseUrl;
  // le añadimos el tipo por parametros
  movieListUrl += `movie/${movieListType}`;
  // le añadimos el lenguaje que esta en el objeto de config
  movieListUrl += `?language=${apiConfig.langIso}`;
  // le añadimos la clave que es necesaria que esta en el objeto de config
  movieListUrl += `&api_key=${apiConfig.apiKey}`;
  movieListUrl += `&page=${page}`;
  return movieListUrl;
}

export function getMovieDetailsUrl(movieId) {
  let movieDetailsUrl = apiConfig.baseUrl;
  movieDetailsUrl += `movie/${movieId}`;
  movieDetailsUrl += `?language=${apiConfig.langIso}`;
  movieDetailsUrl += `&api_key=${apiConfig.apiKey}`;

  return movieDetailsUrl;
}

export function getMovieSearchUrl(query, page = 1) {
  let movieSearchUrl = apiConfig.baseUrl;
  movieSearchUrl += `search/movie`;
  movieSearchUrl += `?query=${query}`;
  movieSearchUrl += `&language=${apiConfig.langIso}`;
  movieSearchUrl += `&page=${page}`;
  movieSearchUrl += `&api_key=${apiConfig.apiKey}`;

  return movieSearchUrl;
}

