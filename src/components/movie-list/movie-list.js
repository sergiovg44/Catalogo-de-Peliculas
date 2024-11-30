import { getMovieListUrl } from "../../utils/api.utils";
import { MovieListType , MovieListLayout } from "../../config/config";
import { fetchMoviesData } from "../../utils/api.utils";



export async function getMovieListData() {
    // Traemos los datos del servidor (el popular es lo que me va cambiando el tipo de listado de pelis)
    // al tener un objeto ya con las listas de peliculas nos lo traemos en un 
    // en un futuro pasarselo por parametros
    const url = getMovieListUrl(MovieListType.popular)
    const data = await fetchMoviesData(url)
    return data?.results
}

