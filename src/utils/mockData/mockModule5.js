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
} from "../imagesGames";

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
} from "../sounds";

import { getUniqueId } from "../mocks";

export const listPair = [
  [
    {
      id: getUniqueId(),
      name: "Anillo",
      sound: anilloSound,
      image: anillo,
    },
    {
      id: getUniqueId(),
      name: "Avión",
      sound: avionSound,
      image: avion,
    },
    {
      id: getUniqueId(),
      name: "Anillo",
      sound: anilloSound,
      image: anillo,
    },
    {
      id: getUniqueId(),
      name: "Avión",
      sound: avionSound,
      image: avion,
    },
    {
      id: getUniqueId(),
      name: "Araña",
      sound: aranaSound,
      image: arana,
    },
    {
      id: getUniqueId(),
      name: "Arcoíris",
      sound: arcoirisSound,
      image: arcoiris,
    },
    {
      id: getUniqueId(),
      name: "Araña",
      sound: aranaSound,
      image: arana,
    },
    {
      id: getUniqueId(),
      name: "Arcoíris",
      sound: arcoirisSound,
      image: arcoiris,
    },
  ],
  [
    {
      id: getUniqueId(),
      name: "Alas",
      sound: alasSound,
      image: alas,
    },
    {
      id: getUniqueId(),
      name: "Avión",
      sound: avionSound,
      image: avion,
    },
    {
      id: getUniqueId(),
      name: "Arcoíris",
      sound: arcoirisSound,
      image: arcoiris,
    },
    {
      id: getUniqueId(),
      name: "Alas",
      sound: alasSound,
      image: alas,
    },
    {
      id: getUniqueId(),
      name: "Astronauta",
      sound: astronautaSound,
      image: astronauta,
    },
    {
      id: getUniqueId(),
      name: "Avión",
      sound: avionSound,
      image: avion,
    },
    {
      id: getUniqueId(),
      name: "Astronauta",
      sound: astronautaSound,
      image: astronauta,
    },
    {
      id: getUniqueId(),
      name: "Arcoíris",
      sound: arcoirisSound,
      image: arcoiris,
    },
  ],
  [
    {
      id: getUniqueId(),
      name: "Ave",
      sound: aveSound,
      image: ave,
    },
    {
      id: getUniqueId(),
      name: "Arcoíris",
      sound: arcoirisSound,
      image: arcoiris,
    },
    {
      id: getUniqueId(),
      name: "Arbol",
      sound: arbolSound,
      image: arbol,
    },
    {
      id: getUniqueId(),
      name: "Ave",
      sound: aveSound,
      image: ave,
    },
    {
      id: getUniqueId(),
      name: "Anillo",
      sound: anilloSound,
      image: anillo,
    },
    {
      id: getUniqueId(),
      name: "Arbol",
      sound: arbolSound,
      image: arbol,
    },
    {
      id: getUniqueId(),
      name: "Anillo",
      sound: anilloSound,
      image: anillo,
    },
    {
      id: getUniqueId(),
      name: "Arcoíris",
      sound: arcoirisSound,
      image: arcoiris,
    },
  ],
  [
    {
      id: getUniqueId(),
      name: "Alas",
      sound: alasSound,
      image: alas,
    },
    {
      id: getUniqueId(),
      name: "Ave",
      sound: aveSound,
      image: ave,
    },
    {
      id: getUniqueId(),
      name: "Alas",
      sound: alasSound,
      image: alas,
    },
    {
      id: getUniqueId(),
      name: "Avión",
      sound: avionSound,
      image: avion,
    },
    {
      id: getUniqueId(),
      name: "Abeja",
      sound: AbejaSound,
      image: abeja,
    },
    {
      id: getUniqueId(),
      name: "Avión",
      sound: avionSound,
      image: avion,
    },
    {
      id: getUniqueId(),
      name: "Abeja",
      sound: AbejaSound,
      image: abeja,
    },
    {
      id: getUniqueId(),
      name: "Ave",
      sound: aveSound,
      image: ave,
    },
  ],
  [
    {
      id: getUniqueId(),
      name: "Abeja",
      sound: AbejaSound,
      image: abeja,
    },
    {
      id: getUniqueId(),
      name: "Araña",
      sound: aranaSound,
      image: arana,
    },
    {
      id: getUniqueId(),
      name: "Astronauta",
      sound: astronauta,
      image: alas,
    },
    {
      id: getUniqueId(),
      name: "Araña",
      sound: aranaSound,
      image: arana,
    },
    {
      id: getUniqueId(),
      name: "Astronauta",
      sound: astronauta,
      image: alas,
    },
    {
      id: getUniqueId(),
      name: "Arbol",
      sound: arbolSound,
      image: arbol,
    },
    {
      id: getUniqueId(),
      name: "Abeja",
      sound: AbejaSound,
      image: abeja,
    },
    {
      id: getUniqueId(),
      name: "Arbol",
      sound: arbolSound,
      image: arbol,
    },
  ],
];

export const getModuleData = () => {
  return listPair[Math.floor(Math.random() * listPair.length)];
};
