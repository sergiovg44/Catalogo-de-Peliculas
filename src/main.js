import "./scss/style.scss";

import {
        listMoviesList,
        removeAll,

        listMoviesGrid,

} from "./utils/api.utils.js"

import  {objectIdMovie,
        objectValueSelect,
        objectViewGrid
} from "./config/config.js"

 import { createMoviePage,
        
 } from "./components/movie-detail/movie-detail.js";

// import {
//         getMovieDetailsUrl,
//         fetchMoviesData
// } from "./utils/api.utils.js"


// estado de la vista si es true esta en modo cuadricula y el valor del selecctor
// let viewGrid = true
// estado de la lista 
// let valueSelect = "popular"

// El objeto objectIdMovie.valorId esta almacenando el id de las peliculas cuando se pulsa alguna //



const selectList = document.querySelector("#select-list")
// si comentas esta linea deja de aparecer para hacer pruebas
listMoviesGrid(objectValueSelect.valueSelect)
selectList.addEventListener("change", () => {
        objectValueSelect.valueSelect = selectList.value
        // console.log(objectValueSelect.valueSelect)
        // console.log(objectViewGrid.viewGrid)
        // console.log(objectIdMovie.valorId)
        
        if (objectViewGrid.viewGrid === true) {
                removeAll()

                listMoviesGrid(objectValueSelect.valueSelect)

        } else if (objectViewGrid.viewGrid === false) {

                removeAll()
                listMoviesList(objectValueSelect.valueSelect)
        }

})

const buttonGrid = document.querySelector("#button-grid")

buttonGrid.addEventListener("click" ,() => {
        if (objectViewGrid.viewGrid === false ) {
                removeAll()
                listMoviesGrid(objectValueSelect.valueSelect)
                // console.log(objectViewGrid.viewGrid)
                objectViewGrid.viewGrid = !objectViewGrid.viewGrid
        }
})
const buttonRow = document.querySelector("#button-row")

buttonRow.addEventListener("click" ,() => {
        if (objectViewGrid.viewGrid === true ) {
                removeAll()
                listMoviesList(objectValueSelect.valueSelect)
                objectViewGrid.viewGrid = !objectViewGrid.viewGrid
        }
})

