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
        objectViewGrid
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
        if (objectViewGrid.viewGrid === false) {
                removeAll()
                listMoviesGrid(objectValueSelect.valueSelect)

                objectViewGrid.viewGrid = !objectViewGrid.viewGrid
        }
})
const buttonRow = document.querySelector("#button-row")

buttonRow.addEventListener("click", () => {
        if (objectViewGrid.viewGrid === true) {
                removeAll()
                listMoviesList(objectValueSelect.valueSelect)
                objectViewGrid.viewGrid = !objectViewGrid.viewGrid
        }
})

async function getMovieSearch(element) {
        // Traemos los datos del servidor 

        const url = getMovieSearchUrl(element)
        const data = await fetchMoviesData(url)

        return data
}
let valueSearch = ''
const search = document.querySelector('#search-movie-input')
search.addEventListener('input', (event) =>{
        valueSearch=event.target.value
        
        console.log(valueSearch)
})

const searchButton = document.querySelector('#search-movie-btn')
searchButton.addEventListener("click", async (event) =>{
        event.preventDefault();
        // removeAll()
        let searchApi = await getMovieSearch (valueSearch)
        let searchApiResult = searchApi.results
        console.log(searchApi)

        if (objectViewGrid.viewGrid === true) {
                removeAll()

               await listMoviesSearchGrid(searchApiResult)

        } else if (objectViewGrid.viewGrid === false) {

                removeAll()
               await listMoviesSearchList(searchApiResult)
        }

})

