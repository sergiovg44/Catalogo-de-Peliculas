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

/*

{
    "adult": false,
    "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
    "belongs_to_collection": {
        "id": 448150,
        "name": "Deadpool Collection",
        "poster_path": "/4y20YJ1F3z7Biptt2XBX1RXOSUr.jpg",
        "backdrop_path": "/hBQOWY8qWXJVFAc8yLTh1teIu43.jpg"
    },
    "budget": 200000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "homepage": "https://www.marvel.com/movies/deadpool-and-wolverine",
    "id": 533535,
    "imdb_id": "tt6263850",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_title": "Deadpool & Wolverine",
    "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    "popularity": 743.706,
    "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    "production_companies": [
        {
            "id": 420,
            "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
            "name": "Marvel Studios",
            "origin_country": "US"
        },
        {
            "id": 104228,
            "logo_path": "/hx0C1XcSxGgat8N62GpxoJGTkCk.png",
            "name": "Maximum Effort",
            "origin_country": "US"
        },
        {
            "id": 2575,
            "logo_path": "/9YJrHYlcfHtwtulkFMAies3aFEl.png",
            "name": "21 Laps Entertainment",
            "origin_country": "US"
        },
        {
            "id": 127928,
            "logo_path": "/h0rjX5vjW5r8yEnUBStFarjcLT4.png",
            "name": "20th Century Studios",
            "origin_country": "US"
        },
        {
            "id": 176762,
            "logo_path": null,
            "name": "Kevin Feige Productions",
            "origin_country": "US"
        },
        {
            "id": 22213,
            "logo_path": "/qx9K6bFWJupwde0xQDwOvXkOaL8.png",
            "name": "TSG Entertainment",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2024-07-24",
    "revenue": 1338073382,
    "runtime": 128,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Come together.",
    "title": "Deadpool & Wolverine",
    "video": false,
    "vote_average": 7.67,
    "vote_count": 5850
}*/

/*
{
    "id": 1241982,
    "cast": [
        {
            "adult": false,
            "gender": 1,
            "id": 1564846,
            "known_for_department": "Acting",
            "name": "Auliʻi Cravalho",
            "original_name": "Auliʻi Cravalho",
            "popularity": 22.094,
            "profile_path": "/vEroqcnM2g6yY7qXDAie7hx2Cyp.jpg",
            "cast_id": 19,
            "character": "Moana (voice)",
            "credit_id": "65c7a9bdaad9c20164b6234e",
            "order": 0
        },
        {
            "adult": false,
            "gender": 2,
            "id": 18918,
            "known_for_department": "Acting",
            "name": "Dwayne Johnson",
            "original_name": "Dwayne Johnson",
            "popularity": 74.366,
            "profile_path": "/5QApZVV8FUFlVxQpIK3Ew6cqotq.jpg",
            "cast_id": 18,
            "character": "Maui (voice)",
            "credit_id": "65c6293894d8a80162127124",
            "order": 1
        },
        {
            "adult": false,
            "gender": 2,
            "id": 4775908,
            "known_for_department": "Acting",
            "name": "Hualālai Chung",
            "original_name": "Hualālai Chung",
            "popularity": 3.138,
            "profile_path": "/x2g5fdHqETY9dZgL4aB0QDP0boR.jpg",
            "cast_id": 58,
            "character": "Moni (voice)",
            "credit_id": "666cf3450000000000831f0a",
            "order": 2
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1868823,
            "known_for_department": "Acting",
            "name": "Rose Matafeo",
            "original_name": "Rose Matafeo",
            "popularity": 3.616,
            "profile_path": "/zQa39fMjbOTIsovbh1TBTJVlToz.jpg",
            "cast_id": 56,
            "character": "Loto (voice)",
            "credit_id": "666cf2ed675ceb4d14597a3b",
            "order": 3
        },
        {
            "adult": false,
            "gender": 2,
            "id": 55937,
            "known_for_department": "Acting",
            "name": "David Fane",
            "original_name": "David Fane",
            "popularity": 3.411,
            "profile_path": "/tcozyaTgAa8rRmzc5qeht0loni6.jpg",
            "cast_id": 57,
            "character": "Kele (voice)",
            "credit_id": "666cf2fb6115e8a7f1843b3c",
            "order": 4
        },
        {
            "adult": false,
            "gender": 1,
            "id": 3819173,
            "known_for_department": "Acting",
            "name": "Awhimai Fraser",
            "original_name": "Awhimai Fraser",
            "popularity": 0.001,
            "profile_path": "/276OUDPl2iIsz772HQw3tiz2JN2.jpg",
            "cast_id": 61,
            "character": "Matangi (voice)",
            "credit_id": "66b6d37cf44005314c072d26",
            "order": 5
        },
        {
            "adult": false,
            "gender": 1,
            "id": 4775906,
            "known_for_department": "Acting",
            "name": "Khaleesi Lambert-Tsuda",
            "original_name": "Khaleesi Lambert-Tsuda",
            "popularity": 5.55,
            "profile_path": "/3LHXDjy9UijbtR7X2EReX5H57kk.jpg",
            "cast_id": 55,
            "character": "Simea (voice)",
            "credit_id": "666cf2e0a3dbbd5e0e61b24a",
            "order": 6
        },
        {
            "adult": false,
            "gender": 2,
            "id": 7242,
            "known_for_department": "Acting",
            "name": "Temuera Morrison",
            "original_name": "Temuera Morrison",
            "popularity": 25.896,
            "profile_path": "/1ckHDFgKXJ8pazmvLCW7DeOKqA0.jpg",
            "cast_id": 53,
            "character": "Chief Tui (voice)",
            "credit_id": "666cf2989f82c987225979ce",
            "order": 7
        },
        {
            "adult": false,
            "gender": 1,
            "id": 151246,
            "known_for_department": "Acting",
            "name": "Nicole Scherzinger",
            "original_name": "Nicole Scherzinger",
            "popularity": 13.015,
            "profile_path": "/sB6TNkTdLCkK6DVd5NlBPtfssyD.jpg",
            "cast_id": 54,
            "character": "Sina (voice)",
            "credit_id": "666cf2a9bb35a360c7ebfebb",
            "order": 8
        },
        {
            "adult": false,
            "gender": 1,
            "id": 15298,
            "known_for_department": "Acting",
            "name": "Rachel House",
            "original_name": "Rachel House",
            "popularity": 8.9,
            "profile_path": "/m8D9XlTGfI0ZmauMKtYp5tw8eNi.jpg",
            "cast_id": 63,
            "character": "Gramma Tala (voice)",
            "credit_id": "66b6d41e19c13a21529ed400",
            "order": 9
        },
        {
            "adult": false,
            "gender": 2,
            "id": 4877023,
            "known_for_department": "Acting",
            "name": "Gerald Ramsey",
            "original_name": "Gerald Ramsey",
            "popularity": 0.001,
            "profile_path": null,
            "cast_id": 62,
            "character": "Tautai Vasa (voice)",
            "credit_id": "66b6d3bcb1bb07f22de5ef5e",
            "order": 10
        },
        {
            "adult": false,
            "gender": 2,
            "id": 21088,
            "known_for_department": "Acting",
            "name": "Alan Tudyk",
            "original_name": "Alan Tudyk",
            "popularity": 16.414,
            "profile_path": "/jUuUbPuMGonFT5E2pcs4alfqaCN.jpg",
            "cast_id": 34,
            "character": "Hei Hei (voice)",
            "credit_id": "6656159e9b2e4734b9508141",
            "order": 11
        },
        {
            "adult": false,
            "gender": 2,
            "id": 55936,
            "known_for_department": "Acting",
            "name": "Jemaine Clement",
            "original_name": "Jemaine Clement",
            "popularity": 19.189,
            "profile_path": "/nFAD9b0MzFmujo8k4jXbhr5GQpq.jpg",
            "cast_id": 68,
            "character": "Tamatoa (voice)",
            "credit_id": "674155158b4e4c2ef6f7aae0",
            "order": 12
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1189815,
            "known_for_department": "Acting",
            "name": "Tofiga Fepulea'i",
            "original_name": "Tofiga Fepulea'i",
            "popularity": 0.447,
            "profile_path": "/laI8wRUzcf5Dw6eqJsgxIiFZsrV.jpg",
            "cast_id": 69,
            "character": "Nalo (voice)",
            "credit_id": "67415530dae2e6a938257ac1",
            "order": 13
        },
        {
            "adult": false,
            "gender": 0,
            "id": 5076337,
            "known_for_department": "Acting",
            "name": "Tiana Johnson",
            "original_name": "Tiana Johnson",
            "popularity": 0.382,
            "profile_path": null,
            "cast_id": 71,
            "character": "Moanabe (voice)",
            "credit_id": "67415614703e85589d188037",
            "order": 14
        },
        {
            "adult": false,
            "gender": 0,
            "id": 5077784,
            "known_for_department": "Acting",
            "name": "Jasmine Johnson",
            "original_name": "Jasmine Johnson",
            "popularity": 0.38,
            "profile_path": null,
            "cast_id": 77,
            "character": "Moanabe (voice)",
            "credit_id": "67425915fb58d769bdbbbb04",
            "order": 15
        },
        {
            "adult": false,
            "gender": 0,
            "id": 5076338,
            "known_for_department": "Acting",
            "name": "Ata Maivia Johnson",
            "original_name": "Ata Maivia Johnson",
            "popularity": 0.272,
            "profile_path": null,
            "cast_id": 72,
            "character": "Villager (voice)",
            "credit_id": "6741566a4a3dc178173d4ea1",
            "order": 16
        },
        {
            "adult": false,
            "gender": 2,
            "id": 2088964,
            "known_for_department": "Directing",
            "name": "Bryson Chun",
            "original_name": "Bryson Chun",
            "popularity": 0.001,
            "profile_path": null,
            "cast_id": 73,
            "character": "Additional Voices (voice)",
            "credit_id": "6741568e6370ecad3fffc1b0",
            "order": 17
        },
        {
            "adult": false,
            "gender": 1,
            "id": 3988596,
            "known_for_department": "Acting",
            "name": "Noemi Josefina Flores",
            "original_name": "Noemi Josefina Flores",
            "popularity": 0.001,
            "profile_path": null,
            "cast_id": 74,
            "character": "Additional Voices (voice)",
            "credit_id": "674156998b4e4c2ef6f7ab24",
            "order": 18
        },
        {
            "adult": false,
            "gender": 0,
            "id": 5076340,
            "known_for_department": "Acting",
            "name": "Setarosa Tuitasi-Ledoux",
            "original_name": "Setarosa Tuitasi-Ledoux",
            "popularity": 0.206,
            "profile_path": null,
            "cast_id": 75,
            "character": "Additional Voices (voice)",
            "credit_id": "674156e6cce66cf899e94c1d",
            "order": 19
        },
        {
            "adult": false,
            "gender": 0,
            "id": 5076341,
            "known_for_department": "Acting",
            "name": "Bentley Pupuhi-Fernandez",
            "original_name": "Bentley Pupuhi-Fernandez",
            "popularity": 0.565,
            "profile_path": null,
            "cast_id": 76,
            "character": "Additional Voices (voice)",
            "credit_id": "674156f84a3dc178173d4ecb",
            "order": 20
        }
    ],
    "crew": [
        {
            "adult": false,
            "gender": 2,
            "id": 4524084,
            "known_for_department": "Art",
            "name": "David G. Derrick Jr.",
            "original_name": "David G. Derrick Jr.",
            "popularity": 6.618,
            "profile_path": "/j5JOtRua5KduoPsQVix0rwY3jOo.jpg",
            "credit_id": "65c3f76295acf001831d5b39",
            "department": "Directing",
            "job": "Director"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 3889426,
            "known_for_department": "Sound",
            "name": "Abigail Barlow",
            "original_name": "Abigail Barlow",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "65c413ae15c63601634cdebb",
            "department": "Sound",
            "job": "Songs"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 3877305,
            "known_for_department": "Sound",
            "name": "Emily Bear",
            "original_name": "Emily Bear",
            "popularity": 0.676,
            "profile_path": null,
            "credit_id": "65c413b9706b9f01642d4ddc",
            "department": "Sound",
            "job": "Songs"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1716551,
            "known_for_department": "Sound",
            "name": "Opetaia Foa'i",
            "original_name": "Opetaia Foa'i",
            "popularity": 0.923,
            "profile_path": "/uRitkic8TnMsyCjAwJvjlzc2aeK.jpg",
            "credit_id": "65c424b017c4430187ccce2c",
            "department": "Sound",
            "job": "Songs"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 9989,
            "known_for_department": "Sound",
            "name": "Mark Mancina",
            "original_name": "Mark Mancina",
            "popularity": 0.877,
            "profile_path": "/zTFHjOH3D5TTJiMxEro1MPDy7m7.jpg",
            "credit_id": "65c424b4176a94017c36b171",
            "department": "Sound",
            "job": "Songs"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1999218,
            "known_for_department": "Production",
            "name": "Yvett Merino Flores",
            "original_name": "Yvett Merino Flores",
            "popularity": 0.341,
            "profile_path": "/lWDGq9RsYDayXIqdyXz1yHzo2tU.jpg",
            "credit_id": "6611e879c68b69017d04eb82",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 4496979,
            "known_for_department": "Production",
            "name": "Christina Chen",
            "original_name": "Christina Chen",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "6611e8801f3319017dc25c91",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1461394,
            "known_for_department": "Directing",
            "name": "Jason Hand",
            "original_name": "Jason Hand",
            "popularity": 4.145,
            "profile_path": "/gepbkgavGdDXdNbQzdFaxayTpoH.jpg",
            "credit_id": "665779d955f81cdf5ef8fd7f",
            "department": "Directing",
            "job": "Director"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1513971,
            "known_for_department": "Writing",
            "name": "Dana Ledoux Miller",
            "original_name": "Dana Ledoux Miller",
            "popularity": 3.01,
            "profile_path": "/wKqVtkgOv6iMcv1P0YPxV7UtQS9.jpg",
            "credit_id": "66577a0eed2b90153df90135",
            "department": "Directing",
            "job": "Director"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1120694,
            "known_for_department": "Writing",
            "name": "Jennifer Lee",
            "original_name": "Jennifer Lee",
            "popularity": 9.284,
            "profile_path": "/cRxBIe0sa2JcBtczzysV4aFUaEy.jpg",
            "credit_id": "6656125448d202dec97074f3",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 112609,
            "known_for_department": "Sound",
            "name": "David E. Fluhr",
            "original_name": "David E. Fluhr",
            "popularity": 1.253,
            "profile_path": null,
            "credit_id": "665612d8a08918fc9119dbb4",
            "department": "Sound",
            "job": "Sound Re-Recording Mixer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1397844,
            "known_for_department": "Sound",
            "name": "Gabriel Guy",
            "original_name": "Gabriel Guy",
            "popularity": 1.474,
            "profile_path": null,
            "credit_id": "665612e33c7a97692c7074e2",
            "department": "Sound",
            "job": "Production Sound Mixer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1397844,
            "known_for_department": "Sound",
            "name": "Gabriel Guy",
            "original_name": "Gabriel Guy",
            "popularity": 1.474,
            "profile_path": null,
            "credit_id": "665612ee22c5d29c72dfd98b",
            "department": "Sound",
            "job": "Sound Re-Recording Mixer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2005798,
            "known_for_department": "Sound",
            "name": "Paul McGrath",
            "original_name": "Paul McGrath",
            "popularity": 0.652,
            "profile_path": null,
            "credit_id": "66561300d67589827ca36d5f",
            "department": "Sound",
            "job": "Production Sound Mixer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1927481,
            "known_for_department": "Visual Effects",
            "name": "Bob Bennett",
            "original_name": "Bob Bennett",
            "popularity": 0.938,
            "profile_path": null,
            "credit_id": "6656136448d202dec97074fe",
            "department": "Visual Effects",
            "job": "VFX Artist"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 4741240,
            "known_for_department": "Visual Effects",
            "name": "Nicholas Ralabate",
            "original_name": "Nicholas Ralabate",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "665613be7afa4b9bdba88d36",
            "department": "Visual Effects",
            "job": "VFX Artist"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2016600,
            "known_for_department": "Visual Effects",
            "name": "Martin Campos Amoros",
            "original_name": "Martin Campos Amoros",
            "popularity": 0.034,
            "profile_path": null,
            "credit_id": "665613e29b57f1503c5119b9",
            "department": "Visual Effects",
            "job": "Senior Animator"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 4036656,
            "known_for_department": "Visual Effects",
            "name": "Joe Darko",
            "original_name": "Joe Darko",
            "popularity": 0.048,
            "profile_path": null,
            "credit_id": "665613f55f8f02f42e0dec9b",
            "department": "Visual Effects",
            "job": "Animation"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 2127467,
            "known_for_department": "Directing",
            "name": "Naïti Escot",
            "original_name": "Naïti Escot",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "6656158c92519bfe9b5119c3",
            "department": "Visual Effects",
            "job": "VFX Artist"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1462000,
            "known_for_department": "Visual Effects",
            "name": "Dave Hardin",
            "original_name": "Dave Hardin",
            "popularity": 0.029,
            "profile_path": null,
            "credit_id": "665615fdaf64ac486e1fd166",
            "department": "Visual Effects",
            "job": "Animation"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 2011064,
            "known_for_department": "Visual Effects",
            "name": "Maritza Louis",
            "original_name": "Maritza Louis",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "66561651af733da1c7dfd872",
            "department": "Visual Effects",
            "job": "Modeling"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1453626,
            "known_for_department": "Visual Effects",
            "name": "Kevin MacLean",
            "original_name": "Kevin MacLean",
            "popularity": 0.289,
            "profile_path": null,
            "credit_id": "6656166bc6fa75b7a00decda",
            "department": "Visual Effects",
            "job": "Animation"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 3148022,
            "known_for_department": "Visual Effects",
            "name": "Kristin Pratt",
            "original_name": "Kristin Pratt",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "6656168a7a4eebcd1697d70e",
            "department": "Visual Effects",
            "job": "Layout Supervisor"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 4733579,
            "known_for_department": "Visual Effects",
            "name": "Sseruwagi Sinclaire Sebastian",
            "original_name": "Sseruwagi Sinclaire Sebastian",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "665616fb95ab07d9b7212a48",
            "department": "Visual Effects",
            "job": "Animation"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 4741262,
            "known_for_department": "Visual Effects",
            "name": "Ere Santos",
            "original_name": "Ere Santos",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "665617079b57f1503c5119d9",
            "department": "Visual Effects",
            "job": "Animation Supervisor"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 4741263,
            "known_for_department": "Lighting",
            "name": "Carly Senora",
            "original_name": "Carly Senora",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "6656171ca9c11f40431fd27f",
            "department": "Lighting",
            "job": "Lighting Artist"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 186605,
            "known_for_department": "Production",
            "name": "Terri Douglas",
            "original_name": "Terri Douglas",
            "popularity": 3.727,
            "profile_path": "/6yRCc5oKalchZuRvVJJbEDNmLEd.jpg",
            "credit_id": "6656172bd67589827ca36d9d",
            "department": "Production",
            "job": "ADR Voice Casting"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1437538,
            "known_for_department": "Acting",
            "name": "Kurt Crowley",
            "original_name": "Kurt Crowley",
            "popularity": 0.643,
            "profile_path": null,
            "credit_id": "665619bfb9615dac631fd190",
            "department": "Sound",
            "job": "Vocals"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 4741292,
            "known_for_department": "Sound",
            "name": "Opie Gruves",
            "original_name": "Opie Gruves",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "665619f8af64ac486e1fd189",
            "department": "Sound",
            "job": "Music Coordinator"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 4741293,
            "known_for_department": "Sound",
            "name": "Eoin Mallon",
            "original_name": "Eoin Mallon",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "66561a0fa9a6c1e98b19dda4",
            "department": "Sound",
            "job": "Vocal Coach"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 4741309,
            "known_for_department": "Crew",
            "name": "Carrie Tretteen",
            "original_name": "Carrie Tretteen",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "66561b0a542a7939f8707473",
            "department": "Crew",
            "job": "Clearances Coordinator"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1645150,
            "known_for_department": "Crew",
            "name": "Matt Walker",
            "original_name": "Matt Walker",
            "popularity": 0.816,
            "profile_path": null,
            "credit_id": "66561b20a9c11f40431fd2a5",
            "department": "Crew",
            "job": "Executive Music Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 1513971,
            "known_for_department": "Writing",
            "name": "Dana Ledoux Miller",
            "original_name": "Dana Ledoux Miller",
            "popularity": 3.01,
            "profile_path": "/wKqVtkgOv6iMcv1P0YPxV7UtQS9.jpg",
            "credit_id": "666c34443f0624748a385592",
            "department": "Writing",
            "job": "Writer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1318201,
            "known_for_department": "Writing",
            "name": "Jared Bush",
            "original_name": "Jared Bush",
            "popularity": 4.821,
            "profile_path": "/2gIwj1cnqZIKWaFg0ihmZnuZypR.jpg",
            "credit_id": "666c3453f9e0d91c8024b410",
            "department": "Writing",
            "job": "Writer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 9989,
            "known_for_department": "Sound",
            "name": "Mark Mancina",
            "original_name": "Mark Mancina",
            "popularity": 0.877,
            "profile_path": "/zTFHjOH3D5TTJiMxEro1MPDy7m7.jpg",
            "credit_id": "666c35475385b9e8442e89d2",
            "department": "Sound",
            "job": "Original Music Composer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 8159,
            "known_for_department": "Sound",
            "name": "Shannon Mills",
            "original_name": "Shannon Mills",
            "popularity": 2.285,
            "profile_path": "/tq1cbZWf6DhUYAA3dNkeFEtgmQx.jpg",
            "credit_id": "66a66e928554093eee095465",
            "department": "Sound",
            "job": "Supervising Sound Editor"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 1406872,
            "known_for_department": "Sound",
            "name": "Nia Hansen",
            "original_name": "Nia Hansen",
            "popularity": 1.589,
            "profile_path": null,
            "credit_id": "66a66e9e4596108936c65bae",
            "department": "Sound",
            "job": "Sound Designer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 15811,
            "known_for_department": "Writing",
            "name": "John Musker",
            "original_name": "John Musker",
            "popularity": 7.26,
            "profile_path": "/vSn1d9JpEpECu9cQbRGTFWZdLhA.jpg",
            "credit_id": "66c95952b8cb3110a815bc5f",
            "department": "Writing",
            "job": "Characters"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 15810,
            "known_for_department": "Writing",
            "name": "Ron Clements",
            "original_name": "Ron Clements",
            "popularity": 3.867,
            "profile_path": "/u9k9yg2EGlDsxYo3ehf35yRUfcD.jpg",
            "credit_id": "66c95961494002d360387d1f",
            "department": "Writing",
            "job": "Characters"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1318201,
            "known_for_department": "Writing",
            "name": "Jared Bush",
            "original_name": "Jared Bush",
            "popularity": 4.821,
            "profile_path": "/2gIwj1cnqZIKWaFg0ihmZnuZypR.jpg",
            "credit_id": "66ec5b8c7f6fca461632595e",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 0,
            "id": 3470748,
            "known_for_department": "Directing",
            "name": "India Barnardo",
            "original_name": "India Barnardo",
            "popularity": 0.026,
            "profile_path": "/yezo5QtduP3hm43nE6QhbWOEGz1.jpg",
            "credit_id": "6729c211edca7f37f8e65e94",
            "department": "Visual Effects",
            "job": "Animation"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1716551,
            "known_for_department": "Sound",
            "name": "Opetaia Foa'i",
            "original_name": "Opetaia Foa'i",
            "popularity": 0.923,
            "profile_path": "/uRitkic8TnMsyCjAwJvjlzc2aeK.jpg",
            "credit_id": "6747288066b9a4f93c84dae0",
            "department": "Sound",
            "job": "Original Music Composer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 18918,
            "known_for_department": "Acting",
            "name": "Dwayne Johnson",
            "original_name": "Dwayne Johnson",
            "popularity": 74.366,
            "profile_path": "/5QApZVV8FUFlVxQpIK3Ew6cqotq.jpg",
            "credit_id": "674771f4d7a205715b617d46",
            "department": "Production",
            "job": "Executive Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 2088964,
            "known_for_department": "Directing",
            "name": "Bryson Chun",
            "original_name": "Bryson Chun",
            "popularity": 0.001,
            "profile_path": null,
            "credit_id": "67585b15637463229eafd162",
            "department": "Writing",
            "job": "Writers' Production"
        }
    ]
}*/