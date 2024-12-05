import "./scss/style.scss";

import {
        listMoviesList,
        removeAllList,
        removeAllGrid,
        listMoviesGrid,

} from "./utils/api.utils"

import  {objectIdMovie} from "./config/config.js"

// import {
//     getMovieListData,
//     // addmovieListElemnt
// } from "./components/movie-list/movie-list"

// import { connectionParent } from "./utils/api.utils.js"
// import { container  } from "./utils/api.utils.js"


// estado de la vista si es true esta en modo cuadricula y el valor del selecctor
let viewGrid = true
// estado de la lista 
let valueSelect = "popular"

// El objeto objectIdMovie.valorId esta almacenando el id de las peliculas cuando se pulsa alguna //



const selectList = document.querySelector("#select-list")

listMoviesGrid(valueSelect)
selectList.addEventListener("change", () => {
        valueSelect = selectList.value
        console.log(valueSelect)
        console.log(viewGrid)
        console.log(objectIdMovie.valorId)
        
        if (viewGrid === true) {
                removeAllGrid()

                listMoviesGrid(valueSelect)

        } else if (viewGrid === false) {

                removeAllList()
                listMoviesList(valueSelect)
        }

})

const buttonGrid = document.querySelector("#button-grid")

buttonGrid.addEventListener("click" ,() => {
        if (viewGrid === false ) {
                removeAllList()
                listMoviesGrid(valueSelect)
                console.log(viewGrid)
                viewGrid = !viewGrid
        }
})
const buttonRow = document.querySelector("#button-row")

buttonRow.addEventListener("click" ,() => {
        if (viewGrid === true ) {
                removeAllGrid()
                listMoviesList(valueSelect)
                viewGrid = !viewGrid
        }
})