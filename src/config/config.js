export const MovieListType = Object.freeze({
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
  upcoming: "upcoming",
});

export const MovieListLayout = Object.freeze({
  grip: "grid",
  row: "row",
})

export const globalConfig = {
  notAvailableValue: "(No disponible)",
  defaultMovieListType: MovieListType.nowPlaying,
};

export const apiConfig = {
  apiKey: "536f1062e97de4146b10c5f5921ecb88",
  langIso: "en-EN",
  baseUrl: "https://api.themoviedb.org/3/",
  posterBaseUrl: "http://image.tmdb.org/t/p",
  backdropBaseUrl: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces",
};

// Almaceno el id al cual se le pulsa
export let objectIdMovie = {
  valorId: "",
}

export let objectViewGrid = {
    viewGrid: true,
  }

  export let objectValueSelect = {
    valueSelect: "popular",
  }

  export let objectValueSearch = {
    valueSearch: '',
    searchApiResult: ''
  }



