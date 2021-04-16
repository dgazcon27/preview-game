import {
  abeja,
  anillo,
  arana,
  arbol,
  arcoiris,
  ave,
  avion,
} from "../utils/imagesGames";

import {
  arbolSound,
  arcoirisSound,
  aranaSound,
  aveSound,
  avionSound,
  AbejaSound,
  anilloSound,
} from "../utils/sounds";

export const data = [
  {
    word1: {
      id: 1,
      name: "Arbol",
      image: arbol,
      sound: arbolSound,
    },
    word2: {
      id: 2,
      name: "Abeja",
      image: abeja,
      sound: AbejaSound,
    },
  },
  {
    word1: {
      id: 3,
      name: "Anillo",
      image: anillo,
      sound: anilloSound,
    },
    word2: {
      id: 4,
      name: "Araña",
      image: arana,
      sound: aranaSound,
    },
  },
  {
    word1: {
      id: 5,
      name: "Arcoiris",
      image: arcoiris,
      sound: arcoirisSound,
    },
    word2: {
      id: 6,
      name: "Avión",
      image: avion,
      sound: avionSound,
    },
  },
];
// let i=1
// export const data = items.reduce((prev, item) => {
//   let index = Math.floor(Math.random() * items.length)

// }, []) ;
