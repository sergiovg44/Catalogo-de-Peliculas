import { apiConfig } from "../config";

export function getMoviePosterUrl(path, width = 400) {
  return `${apiConfig.posterBaseUrl}/w${width}/${path}`;
}

export function getMovieBackdropUrl(path) {
  return `${apiConfig.backdropBaseUrl}${path}`;
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

export async function fetchMoviesData(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false)
    throw new Error(
      `Error: ${data?.status_message ?? "something whent wrong"}`
    );

  return data;
}


// Funcion para crear el div que contiene toda para la vista de cuadricula

function movieContainer() {
  const divContainer = document.createElement("div")
  divContainer.id = "movie-list-container"
  divContainer.classList = "container"
  return divContainer
}

// Funcion para crear el div con todas las clases para la vista cuadricula
function movieGrid() {
  const divGrid = document.createElement("div")
  divGrid.classList = "movie-grid col-lg-3 col-md-4 col-sm-6"
  return divGrid
}

// Creamos la imagen hay que cambiar la url que se la meteremos por parametros cuando veamos que funcione

function moviePoster(movie) {
  const imgPoster = document.createElement("img")
  imgPoster.classList = "movie-poster"
  imgPoster.setAttribute("src", getMoviePosterUrl(movie))
  return imgPoster
}

// creamos el titulo metiendoselo por parametros
function movieTitle(title) {
  const divTitle = document.createElement("div")
  divTitle.classList = "movie-title"
  divTitle.textContent = title
  return divTitle
}
// creamos el rating metiendoselo por parametros
function movieRating(rating) {
  const divRating = document.createElement("div")
  divRating.classList = "movie-data"
  divRating.textContent = rating
  return divRating
}
// creamos el año metiendoselo por parametros
function moviYear(year) {
  const divYear = document.createElement("div")
  divYear.classList = "movie-data"
  divYear.textContent = year
  return divYear
}
// creamos la descripción metiendoselo por parametros
function moviOverview(overview) {
  const divOverview = document.createElement("div")
  divOverview .classList = "movie-overview"
  divOverview .textContent = overview
  return divOverview 
}


export function connectionParent(movie) {
  const app = document.querySelector("#app")
  let createElementContainer = movieContainer()
  const createElementGrid = movieGrid()
  app.appendChild(createElementContainer)
  createElementContainer.appendChild(createElementGrid)
  createElementGrid.appendChild(moviePoster(movie.backdrop_path))
  createElementGrid.appendChild(movieTitle(movie.title))
  createElementGrid.appendChild(movieRating(movie.vote_average))
  createElementGrid.appendChild(moviYear(movie.release_date))
  createElementGrid.appendChild(moviOverview(movie.overview))
}

/*
<div id="movie-list-container" class="container">
<div class="movie-grid col-lg-3 col-md-4 col-sm-6">
  <img
    src="http://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    class="movie-poster"
  />
  <div class="movie-title">Vaiana 2</div>
  <div class="movie-data">7.2</div>
  <div class="movie-data">2024</div>
  <div class="movie-overview">
    Tras recibir una inesperada llamada de sus antepasados, Vaiana debe
    viajar a los lejanos mares de Oceanía y adentrarse en peligrosas
    aguas perdidas para vivir una aventura sin precedentes.
  </div>
</div>
*/