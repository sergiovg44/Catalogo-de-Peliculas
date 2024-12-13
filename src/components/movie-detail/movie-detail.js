import {
  getMovieDetailsUrl,
  getMoviePosterUrl,
  listMoviesList,
  listMoviesGrid,
} from "../../utils/api.utils"

import{
  fetchMoviesData
} from "../movie-list/movie-list.js"
import {

  apiConfig,
  objectValueSelect,
  objectViewGrid
} from "../../config/config.js"







//   getMovieDetailsUrl (id)


// `https://api.themoviedb.org/3/movie/${id}?language=en-EN&api_key=536f1062e97de4146b10c5f5921ecb88`



// esta funcion me devuelve el array con los datos 

// URL de la API
// const url = `https://api.themoviedb.org/3/movie/${id}?language=en-EN&api_key=536f1062e97de4146b10c5f5921ecb88`;

 async function getMovieListData(element) {
        // Traemos los datos del servidor (el popular es lo que me va cambiando el tipo de listado de pelis)
        // al tener un objeto ya con las listas de peliculas nos lo traemos en un 
        // en un futuro pasarselo por parametros
        
        const url = getMovieDetailsUrl(element)
        const data = await fetchMoviesData(url)
        // console.log(data)
        return data
    }
    

    






// Crear el banner individualmente
function createMovieBannerImage(imageUrl, altText) {
  const img = document.createElement('img');
  img.src = getMoviePosterUrl(imageUrl, 500);
  // img.alt = altText;
  return img;
}

// Crear el título de la película individualmente
function createMovieTitle(title) {
  const h1 = document.createElement('h1');
  h1.textContent = title;
  return h1;
}

// Crear detalles individuales
function createMovieDetail(label, value, ) {
  const detail = document.createElement('p');
  detail.innerHTML = `<span>${label}:</span> ${value}`;

  return detail;
}

// Crear el título de la sinopsis
function createSynopsisTitle() {
  const h2 = document.createElement('h2');
  h2.textContent = 'Sinopsis';
  return h2;
}

// Crear el contenido de la sinopsis
function createSynopsisContent(overview) {
  const p = document.createElement('p');
  p.textContent = overview;
  return p;
}
function crearBotonVolver() {

  const boton = document.createElement('button');

  boton.innerHTML = `<span>Volver</span>`;
  boton.addEventListener('click', () => {
  app.innerHTML = '';
    if(objectViewGrid.viewGrid === true){
      listMoviesGrid(objectValueSelect.valueSelect)
    }else if (objectViewGrid.viewGrid === false){
      listMoviesList(objectValueSelect.valueSelect)
    }

});

  return boton
}


export async function createMoviePage(id) {
  const app = document.querySelector('#app');
  app.innerHTML = ''; // Limpiar el contenedor antes de agregar contenido
  

  const movieData = await getMovieListData(id)
  const movieDataCredit = await getMovieCredit (id)
  const selectView = document.querySelector('#select-views')
  selectView.classList.remove ('views-movie')
  selectView.classList.add ('views-movie-none')
  // Crear el contenedor principal
  const mainContainer = document.createElement('div');
  mainContainer.className = 'flex container container-detail';
  mainContainer.style.backgroundImage = `url('${apiConfig.backdropBaseUrl}${movieData.backdrop_path}')`
  // Crear y añadir el banner
  const bannerContainer = document.createElement('section');
  bannerContainer.className = 'movie-banner';
  const bannerImage = createMovieBannerImage(movieData.backdrop_path, movieData.altText);
  bannerContainer.appendChild(bannerImage);
  mainContainer.appendChild(bannerContainer);

  // Crear el contenedor secundario para los detalles y la sinopsis
  const secondaryContainer = document.createElement('div');
  secondaryContainer.className ='text-content-detail'
  // Crear y añadir los detalles
  const detailsContainer = document.createElement('section');
  detailsContainer.className = 'movie-details';

  const movieTitle = createMovieTitle(movieData.title);
  detailsContainer.appendChild(movieTitle);

  const infoContainer = document.createElement('div');
  infoContainer.className = 'informacion';
  const genreNames = movieData.genres.map(genre => genre.name).join(', ');
  const genreDetail = createMovieDetail('Género', genreNames , 'genre');
  console.log(genreNames)
  // const durationDetail = createMovieDetail('Director', movieDataCredit.directors[0].name, 'director');
  const ratingDetail = createMovieDetail('Rating', movieData.vote_average, 'rating');
  const yearDetail = createMovieDetail('Año', movieData.release_date, 'year');

  infoContainer.appendChild(genreDetail);
  // infoContainer.appendChild(durationDetail);
  infoContainer.appendChild(ratingDetail);
  infoContainer.appendChild(yearDetail);

  detailsContainer.appendChild(infoContainer);
  secondaryContainer.appendChild(detailsContainer);

  // Crear y añadir la sinopsis
  const synopsisContainer = document.createElement('section');
  synopsisContainer.className = 'movie-overview-details';

  const synopsisTitle = createSynopsisTitle();
  const synopsisContent = createSynopsisContent(movieData.overview);

  synopsisContainer.appendChild(synopsisTitle);
  synopsisContainer.appendChild(synopsisContent);
  secondaryContainer.appendChild(synopsisContainer);

  // Crear el boton 
  // const volver =  crearBotonVolver()
  secondaryContainer.appendChild(crearBotonVolver());


  // Añadir el contenedor secundario al contenedor principal
  mainContainer.appendChild(secondaryContainer);

  // Añadir el contenedor principal al DOM
  app.appendChild(mainContainer);
}



// const data = await getMovieListData(id)

// console.log(data)
// createMoviePage (data)


async function getMovieCredit(element) {
  // Traemos los datos del servidor (el popular es lo que me va cambiando el tipo de listado de pelis)
  // al tener un objeto ya con las listas de peliculas nos lo traemos en un 
  // en un futuro pasarselo por parametros
  
  const url = `https://api.themoviedb.org/3/movie/${element}/credits?api_key=${apiConfig.apiKey}&language=${apiConfig.langIso}`
  const data = await fetchMoviesData(url)
  // console.log(data)

  const actors = data.cast.map(actor => ({
    name: actor.name,
    profile_path: actor.profile_path,
    character: actor.character
}));

// Extraer información del equipo técnico en el departamento de "Directing"
const directors = data.crew
    .filter(crewMember => crewMember.department === "Directing" && crewMember.known_for_department === "Directing" && crewMember.job === "Director" )
    .map(director => ({
        name: director.name,
        job: director.job
        
    }));

    let actorDirecting = {actors , directors}
    // console.log(actorDirecting)
  return actorDirecting
}

// const dataCredit = await getMovieCredit (id)

// console.log(dataCredit)