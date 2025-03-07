import { fetchMoviesData } from "../../utils/api.utils"
import { createMoviePage } from "../movie-detail/movie-detail"
import {
  apiConfig,
  objectIdMovie
} from "../../config/config.js"
import {
  getMovieListUrl,
  getMoviePosterUrl,

} from "../../utils/api.utils.js"



async function getMovieListData(element) {
  // Traemos los datos del servidor (el popular es lo que me va cambiando el tipo de listado de pelis)
  // al tener un objeto ya con las listas de peliculas nos lo traemos en un 
  // en un futuro pasarselo por parametros

  const url = getMovieListUrl(element)
  const data = await fetchMoviesData(url)
  return data?.results
}
// Funcion para crear el div que contiene toda para la vista de cuadricula

function movieContainer() {
  const divContainer = document.createElement("div")
  divContainer.id = "movie-list-container"
  divContainer.classList = "container"
  return divContainer
}

// Funcion para crear el div con todas las clases para la vista cuadricula
function movieGrid(id) {
  const divGrid = document.createElement("div")
  divGrid.classList = "movie-grid col-lg-3 col-md-4 col-sm-6"

  divGrid.addEventListener("click", () => {
    objectIdMovie.valorId = id
    createMoviePage(id)
  })
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
  divOverview.classList = "movie-overview"
  divOverview.textContent = overview
  return divOverview
}
function movieId(id) {
  const divId = document.createElement("div")
  divId.classList = "movie-id"
  divId.textContent = id
  return divId
}

export function container() {
  const app = document.querySelector("#app")
  let createElementContainer = movieContainer()
  app.classList.add("grid")
  app.appendChild(createElementContainer)

}

export function connectionParent(movie) {
  const createElementContainer = document.querySelector("#movie-list-container")

  const selectView = document.querySelector('#select-views')
  selectView.classList.remove('views-movie-none')
  selectView.classList.add('views-movie')
  const createElementGrid = movieGrid(movie.id)
  createElementContainer.appendChild(createElementGrid)
  createElementGrid.appendChild(moviePoster(movie.backdrop_path))
  createElementGrid.appendChild(movieTitle(movie.title))
  createElementGrid.appendChild(movieRating(movie.vote_average))
  createElementGrid.appendChild(moviYear(movie.release_date))
  createElementGrid.appendChild(moviOverview(movie.overview))
  createElementGrid.appendChild(movieId(movie.id))
}
export function listMoviesGrid(valueSelect) {

  getMovieListData(valueSelect).then((movieListData) => {

    // Este es la funcion que crea el div con clase container 
    //  esta clase no debe estar cuando este en modo lista
    container()

    // el bucle que crea todas las peliculas
    movieListData.forEach(element => {
      connectionParent(element)


    });
  })
}


function movieList() {
  const divList = document.createElement("div")
  divList.classList = "movie-list container"
  return divList
}

function movieRow(id) {
  const divRow = document.createElement("div")
  divRow.classList = "row"

  divRow.addEventListener("click", () => {
    objectIdMovie.valorId = id
    createMoviePage(id)
    
  })
  return divRow
}

function col1() {
  const divCol1 = document.createElement("div")
  divCol1.classList = "col-1"
  return divCol1
}

function col11() {
  const divCol11 = document.createElement("div")
  divCol11.classList = "col-11"
  return divCol11
}

export function connectionParentList(movie) {
  const createApp = document.querySelector("#app")

  const selectView = document.querySelector('#select-views')
  selectView.classList.remove('views-movie-none')
  selectView.classList.add('views-movie')
  createApp.classList.add("row")
  createApp.classList.add("container-center")

  const createElementList = movieList()
  createApp.appendChild(createElementList)
  const createRow = movieRow(movie.id)
  createElementList.appendChild(createRow)
  const createCol1 = col1()
  createRow.appendChild(createCol1)
  createCol1.appendChild(moviePoster(movie.backdrop_path))

  const createCol11 = col11()
  createRow.appendChild(createCol11)
  createCol11.appendChild(movieTitle(movie.title))

  createCol11.appendChild(movieRating(movie.vote_average))
  createCol11.appendChild(moviYear(movie.release_date))
  createCol11.appendChild(moviOverview(movie.overview))
  createCol11.appendChild(movieId(movie.id))
}

export function removeAll() {
  const app = document.querySelector('#app');
  app.innerHTML = '';
}

export function listMoviesList(valueSelect) {

  getMovieListData(valueSelect).then((movieListData) => {



    movieListData.forEach(element => {

      connectionParentList(element)

    });
  })
}

export function listMoviesSearchList(search) {


  search.forEach(element => {

    connectionParentList(element)

  });
}

export function listMoviesSearchGrid(search) {

    container()

    search.forEach(element => {
      connectionParent(element)

    });
  }
