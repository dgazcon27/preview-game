import {
  abeja,
  anillo,
  arana,
  arbol,
  arcoiris,
  ave,
  avion,
  insectos,
  oso,
  elefante,
  alas,
  unicornio,
  astronauta,
} from "../imagesGames";

import {
  arbolSound,
  arcoirisSound,
  aranaSound,
  aveSound,
  avionSound,
  AbejaSound,
  anilloSound,
  elefanteSound,
  insectosSound,
  osoSound,
  alasSound,
  unicornioSound,
  astronautaSound,
} from "../sounds";

export const mockAudioData = [
  [
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
    [
      {
        id: 10,
        name: "Astronauta",
        image: astronauta,
        sound: astronautaSound,
      },
      {
        id: 11,
        name: "Ave",
        image: ave,
        sound: aveSound,
      },
      {
        id: 12,
        name: "Unicornio",
        image: unicornio,
        sound: unicornioSound,
      },
    ],
  ],
  [
    [
      {
        id: 1,
        name: "Arbol",
        image: arbol,
        sound: arbolSound,
      },
      {
        id: 2,
        name: "Oso",
        image: oso,
        sound: osoSound,
      },
      {
        id: 3,
        name: "Alas",
        image: alas,
        sound: alasSound,
      },
    ],
    [
      {
        id: 6,
        name: "Insecto",
        image: insectos,
        sound: insectosSound,
      },
      {
        id: 4,
        name: "Arcoíris",
        image: arcoiris,
        sound: arcoirisSound,
      },
      {
        id: 5,
        name: "Astronauta",
        image: astronauta,
        sound: astronautaSound,
      },
    ],
    [
      {
        id: 7,
        name: "Anillo",
        image: anillo,
        sound: anilloSound,
      },
      {
        id: 8,
        name: "Unicornio",
        image: unicornio,
        sound: unicornioSound,
      },
      {
        id: 9,
        name: "Araña",
        image: arana,
        sound: aranaSound,
      },
    ],
    [
      {
        id: 10,
        name: "Elefanta",
        image: elefante,
        sound: elefanteSound,
      },
      {
        id: 11,
        name: "Abeja",
        image: abeja,
        sound: AbejaSound,
      },
      {
        id: 12,
        name: "Avión",
        image: avion,
        sound: avionSound,
      },
    ],
  ],
];

export const getData = () => {
  return new Promise((resolve) =>
    resolve(mockAudioData[Math.floor(Math.random() * mockAudioData.length)])
  );
};
