import "./scss/style.scss";

import {
        listMoviesList,
        removeAll,
        listMoviesGrid,
        listMoviesSearchGrid,
        listMoviesSearchList

} from "./components/movie-list/movie-list.js"

import {
        objectIdMovie,
        objectValueSelect,
        objectViewGrid,
        objectValueSearch
} from "./config/config.js"

import {
        createMoviePage,

} from "./components/movie-detail/movie-detail.js";

import {
        getMovieSearchUrl,
        fetchMoviesData
} from './utils/api.utils.js'


const selectList = document.querySelector("#select-list")
// si comentas esta linea deja de aparecer para hacer pruebas
listMoviesGrid(objectValueSelect.valueSelect)
selectList.addEventListener("change", () => {
        objectValueSelect.valueSelect = selectList.value
        objectValueSearch.valueSearch = ''
        search.value = ''

                if (objectViewGrid.viewGrid === true) {
                        removeAll()

                        listMoviesGrid(objectValueSelect.valueSelect)

                } else if (objectViewGrid.viewGrid === false) {

                        removeAll()
                        listMoviesList(objectValueSelect.valueSelect)
                }


})

const buttonGrid = document.querySelector("#button-grid")

buttonGrid.addEventListener("click", () => {

        if (objectValueSearch.valueSearch !== '') {
                if (objectViewGrid.viewGrid === false) {
                        removeAll()
                        listMoviesSearchGrid(objectValueSearch.searchApiResult)
                        // cambio el valor del selector
                        selectList.value = 'blanco'

                        
                        objectViewGrid.viewGrid = !objectViewGrid.viewGrid
                }
        } else if (objectValueSearch.valueSearch === '') {

                if (objectViewGrid.viewGrid === false) {
                        removeAll()
                        listMoviesGrid(objectValueSelect.valueSelect)

                        objectViewGrid.viewGrid = !objectViewGrid.viewGrid
                }
        }
})
const buttonRow = document.querySelector("#button-row")

buttonRow.addEventListener("click", () => {



        if (objectValueSearch.valueSearch !== '') {
                if (objectViewGrid.viewGrid === true) {
                        removeAll()

                        listMoviesSearchList(objectValueSearch.searchApiResult)
                        objectViewGrid.viewGrid = !objectViewGrid.viewGrid
                        selectList.value = 'blanco'
                }
        } else if (objectValueSearch.valueSearch === '') {

                if (objectViewGrid.viewGrid === true) {
                        removeAll()
                        listMoviesList(objectValueSelect.valueSelect)
                        objectViewGrid.viewGrid = !objectViewGrid.viewGrid
                }
        }
})

async function getMovieSearch(element) {
        // Traemos los datos del servidor 

        const url = getMovieSearchUrl(element)
        const data = await fetchMoviesData(url)

        return data
}
// Almacenamiento del estado del buscador
const search = document.querySelector('#search-movie-input')
search.addEventListener('input', (event) => {
        objectValueSearch.valueSearch = event.target.value


})

// buscador boton

const searchButton = document.querySelector('#search-movie-btn')
searchButton.addEventListener("click", async (event) => {
        event.preventDefault();

        if (objectValueSearch.valueSearch !== '') {

                removeAll()
                let searchApi = await getMovieSearch(objectValueSearch.valueSearch)
                objectValueSearch.searchApiResult = searchApi.results


                if (objectViewGrid.viewGrid === true) {


                        await listMoviesSearchGrid(objectValueSearch.searchApiResult)
                        selectList.value = 'blanco'
                } else if (objectViewGrid.viewGrid === false) {


                        await listMoviesSearchList(objectValueSearch.searchApiResult)
                        selectList.value = 'blanco'
                }

        } else if (objectValueSearch.valueSearch === '') {
                        selectList.value = objectValueSelect.valueSelect
                if (objectViewGrid.viewGrid === true) {
                        removeAll()

                        listMoviesGrid(objectValueSelect.valueSelect)

                } else if (objectViewGrid.viewGrid === false) {

                        removeAll()
                        listMoviesList(objectValueSelect.valueSelect)
                }
        }

})

