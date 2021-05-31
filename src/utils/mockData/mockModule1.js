import {
  abeja,
  anillo,
  arana,
  arbol,
  arcoiris,
  avion,
  alas,
  astronauta,
} from "../imagesGames";

import {
  arbolSound,
  arcoirisSound,
  aranaSound,
  avionSound,
  AbejaSound,
  anilloSound,
  alasSound,
  astronautaSound,
} from "../sounds";

export const data = [
  [
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
    {
      word1: {
        id: 7,
        name: "Astronauta",
        image: astronauta,
        sound: astronautaSound,
      },
      word2: {
        id: 8,
        name: "Alas",
        image: alas,
        sound: alasSound,
      },
    },
  ],
  [
    {
      word1: {
        id: 1,
        name: "Abeja",
        image: abeja,
        sound: AbejaSound,
      },
      word2: {
        id: 2,
        name: "Arcoiris",
        image: arcoiris,
        sound: arcoirisSound,
      },
    },
    {
      word1: {
        id: 3,
        name: "Alas",
        image: alas,
        sound: alasSound,
      },
      word2: {
        id: 4,
        name: "Arbol",
        image: arbol,
        sound: arbolSound,
      },
    },
    {
      word1: {
        id: 6,
        name: "Avión",
        image: avion,
        sound: avionSound,
      },
      word2: {
        id: 6,
        name: "Anillo",
        image: anillo,
        sound: avionSound,
      },
    },
    {
      word1: {
        id: 7,
        name: "Araña",
        image: arana,
        sound: aranaSound,
      },
      word2: {
        id: 7,
        name: "Astronauta",
        image: astronauta,
        sound: astronautaSound,
      },
    },
  ],
];

export const getData = () => {
  return new Promise((resolve) =>
    resolve(data[Math.floor(Math.random() * data.length)])
  );
};
