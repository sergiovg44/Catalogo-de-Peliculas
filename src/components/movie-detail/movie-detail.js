import {

  listMoviesList,
  listMoviesGrid,
  listMoviesSearchList,
  listMoviesSearchGrid
} from "../movie-list/movie-list.js"

import {
  fetchMoviesData,
  getMovieDetailsUrl,
  getMoviePosterUrl,
} from "../../utils/api.utils.js"
import {

  apiConfig,
  objectValueSelect,
  objectViewGrid,
  objectValueSearch
} from "../../config/config.js"


async function getMovieListData(element) {


  const url = getMovieDetailsUrl(element)
  const data = await fetchMoviesData(url)

  return data
}

// Crear el imagen individualmente
function createMovieBannerImage(imageUrl) {
  const img = document.createElement('img');
  img.src = getMoviePosterUrl(imageUrl, 500);

  return img;
}

// Crear el título de la película individualmente
function createMovieTitle(title) {
  const h1 = document.createElement('h1');
  h1.textContent = title;
  return h1;
}

// Crear detalles individuales
function createMovieDetail(label, value,) {
  const detail = document.createElement('p');
  detail.innerHTML = `<span>${label}:</span> ${value}`;

  return detail;
}

// Crear el título de la sinopsis
function createSynopsisTitle(texto) {
  const h2 = document.createElement('h2');
  h2.textContent = texto;
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
    if (objectValueSearch.valueSearch !== '') {
      
      if (objectViewGrid.viewGrid === true) {
        listMoviesSearchGrid(objectValueSearch.searchApiResult)
      } else if (objectViewGrid.viewGrid === false) {
        listMoviesSearchList(objectValueSearch.searchApiResult)
      }
      
      
    }else if(objectValueSearch.valueSearch === ''){

      if (objectViewGrid.viewGrid === true) {
        listMoviesGrid(objectValueSelect.valueSelect)
      } else if (objectViewGrid.viewGrid === false) {
        listMoviesList(objectValueSelect.valueSelect)
      }
    }

  });

  return boton
}


export async function createMoviePage(id) {
  const app = document.querySelector('#app');
  app.innerHTML = ''; // Limpiar el contenedor antes de agregar contenido


  const movieData = await getMovieListData(id)
  const movieDataCredit = await getMovieCredit(id)
  const selectView = document.querySelector('#select-views')
  selectView.classList.remove('views-movie')
  selectView.classList.add('views-movie-none')
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
  secondaryContainer.className = 'text-content-detail'
  // Crear y añadir los detalles
  const detailsContainer = document.createElement('section');
  detailsContainer.className = 'movie-details';

  const movieTitle = createMovieTitle(movieData.title);
  detailsContainer.appendChild(movieTitle);

  const infoContainer = document.createElement('div');
  infoContainer.className = 'informacion';
  // poner todos los generos
  const genreNames = movieData.genres.map(genre => genre.name).join(', ');
  const genreDetail = createMovieDetail('Género', genreNames, 'genre');
  // console.log(genreNames)
  const ratingDetail = createMovieDetail('Rating', movieData.vote_average, 'rating');
  const yearDetail = createMovieDetail('Año', movieData.release_date, 'year');

  infoContainer.appendChild(genreDetail);

  infoContainer.appendChild(ratingDetail);
  infoContainer.appendChild(yearDetail);

  detailsContainer.appendChild(infoContainer);
  secondaryContainer.appendChild(detailsContainer);

  // Crear y añadir la sinopsis
  const synopsisContainer = document.createElement('section');
  synopsisContainer.className = 'movie-overview-details';

  const synopsisTitle = createSynopsisTitle('Sipnosis');
  const synopsisContent = createSynopsisContent(movieData.overview);

  synopsisContainer.appendChild(synopsisTitle);
  synopsisContainer.appendChild(synopsisContent);
  secondaryContainer.appendChild(synopsisContainer);


  secondaryContainer.appendChild(crearBotonVolver());


  // Añadir el contenedor secundario al contenedor principal
  mainContainer.appendChild(secondaryContainer);
  console.log(movieDataCredit)
  // Añadir el contenedor principal al DOM
  app.appendChild(mainContainer);
  app.appendChild(movieActors(movieDataCredit));
}


// Crear el contenedor principal
function movieActors (element){

  const container = document.createElement('div');
  container.classList.add('container-actors');
  
  // Crear y añadir el título
  // const title = document.createElement('h2');
  // title.textContent = 'Actores';
  container.appendChild(createSynopsisTitle('Actores'));
  
  
  // Crear el contenedor de actores
  const actorsContainer = document.createElement('div');
  actorsContainer.classList.add('actors');
  
  // Generar dinámicamente los elementos para cada actor
  
  // element.forEach(actor => {
    for (let i = 0; i<6;i++ ){

      // Crear el contenedor de cada actor
      const actorDiv = document.createElement('div');
      actorDiv.classList.add('actor');
      
      // Crear y añadir la imagen
      const img = document.createElement('img');
      img.src = 'https://media.themoviedb.org/t/p/w138_and_h175_face'+element[i].profile_path;
      actorDiv.appendChild(img);
      
      // Crear y añadir el nombre del actor
      const nameActors = document.createElement('p');
      nameActors.textContent = element[i].name;
      actorDiv.appendChild(nameActors);
      
      // Crear y añadir el personaje
      const characterActors = document.createElement('p');
      characterActors.textContent = element[i].character;
      actorDiv.appendChild(characterActors);
      
      // Añadir el actorDiv al contenedor principal
      actorsContainer.appendChild(actorDiv);
    
  }

  // Añadir el contenedor de actores al contenedor principal
  container.appendChild(actorsContainer);
  
  return container
}
  
  




async function getMovieCredit(element) {
  // Traemos los datos del servidor (el popular es lo que me va cambiando el tipo de listado de pelis)
  // al tener un objeto ya con las listas de peliculas nos lo traemos en un 
  // en un futuro pasarselo por parametros

  const url = `https://api.themoviedb.org/3/movie/${element}/credits?api_key=${apiConfig.apiKey}&language=${apiConfig.langIso}`
  const data = await fetchMoviesData(url)
  // console.log(data)

  const actors = data.cast.map(actor => ({
    name: actor.name,
    profile_path:actor.profile_path,
    character: actor.character
  }));
  
 

  let actorDirecting =  actors 

  return actorDirecting
}

