import {
  abeja,
  anillo,
  arana,
  arbol,
  arcoiris,
  ave,
  avion,
  alas,
  astronauta,
  elefante,
  estrella,
  insectos,
  isla,
  oso,
  uva,
  utiles,
} from "../utils/imagesGames";

import {
  arbolSound,
  arcoirisSound,
  aranaSound,
  aveSound,
  avionSound,
  AbejaSound,
  anilloSound,
  alasSound,
  astronautaSound,
  elefanteSound,
  estrellaSound,
  islaSound,
  insectosSound,
  osoSound,
  utilesSound,
  uvaSound,
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

const mockDataA = [
  {
    id: 1,
    name: "Arbol",
    image: arbol,
    sound: arbolSound,
  },
  {
    id: 2,
    name: "Abeja",
    image: abeja,
    sound: AbejaSound,
  },
  {
    id: 3,
    name: "Anillo",
    image: anillo,
    sound: anilloSound,
  },
  {
    id: 4,
    name: "Araña",
    image: arana,
    sound: aranaSound,
  },
  {
    id: 5,
    name: "Arcoiris",
    image: arcoiris,
    sound: arcoirisSound,
  },
  {
    id: 6,
    name: "Avión",
    image: avion,
    sound: avionSound,
  },
  {
    id: 7,
    name: "Alas",
    image: alas,
    sound: alasSound,
  },
  {
    id: 8,
    name: "Astronauta",
    image: astronauta,
    sound: astronautaSound,
  },
  {
    id: 16,
    name: "Ave",
    image: ave,
    sound: aveSound,
  },
];

const mockData = [
  {
    id: 9,
    name: "Elefante",
    image: elefante,
    sound: elefanteSound,
  },
  {
    id: 10,
    name: "Estrella",
    image: estrella,
    sound: estrellaSound,
  },
  {
    id: 11,
    name: "Insectos",
    image: insectos,
    sound: insectosSound,
  },
  {
    id: 12,
    name: "Islas",
    image: isla,
    sound: islaSound,
  },
  {
    id: 13,
    name: "Oso",
    image: oso,
    sound: osoSound,
  },
  {
    id: 13,
    name: "Uva",
    image: uva,
    sound: uvaSound,
  },
  {
    id: 14,
    name: "Útiles",
    image: utiles,
    sound: utilesSound,
  },
];

export const mockAudioData = [
  [
    {
      id: 1,
      name: "Ave",
      image: ave,
      sound: aveSound,
    },
    {
      id: 2,
      name: "Elefante",
      image: elefante,
      sound: elefanteSound,
    },
    {
      id: 3,
      name: "Arbol",
      image: arbol,
      sound: arbolSound,
    },
  ],
  [
    {
      id: 6,
      name: "Oso",
      image: oso,
      sound: osoSound,
    },
    {
      id: 4,
      name: "Anillo",
      image: anillo,
      sound: anilloSound,
    },
    {
      id: 5,
      name: "Arcoiris",
      image: arcoiris,
      sound: arcoirisSound,
    },
  ],
  [
    {
      id: 7,
      name: "Avion",
      image: avion,
      sound: avionSound,
    },
    {
      id: 8,
      name: "Araña",
      image: arana,
      sound: aranaSound,
    },
    {
      id: 9,
      name: "Insectos",
      image: insectos,
      sound: insectosSound,
    },
  ],
];

export function getItems(columns) {
  let list = [];
  let x = data
    .sort(() => Math.random() - 0.5)
    .reduce((prev, item, index) => {
      list.push(item);
      if ((index + 1) % columns === 0) {
        prev.push(list);
        list = [];
      }
      return prev;
    }, []);

  return x;
}
