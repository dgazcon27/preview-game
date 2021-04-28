import audio1 from "../assets/sounds/respBien.mp3";
import audio2 from "../assets/sounds/respExcelente.mp3";
import siAudio3 from "../assets/sounds/sonidoRespuestas/ResvMuybien.mp3";
import siAudio4 from "../assets/sounds/sonidoRespuestas/RestFelicitaciones.mp3";
import siAudio5 from "../assets/sounds/sonidoRespuestas/resBien.mp3";

import audio3 from "../assets/sounds/RestNo.mp3";
import audio4 from "../assets/sounds/RestEsanoEs.mp3";
import noAudio5 from "../assets/sounds/sonidoRespuestas/sonidoNo.mp3";
import noAudio6 from "../assets/sounds/sonidoRespuestas/RestIntentalodeNuevo.mp3";
import noAudio7 from "../assets/sounds/sonidoRespuestas/RestIntentalo.mp3";
import noAudio8 from "../assets/sounds/sonidoRespuestas/RestEsfuertateMás.mp3";
import noAudio9 from "../assets/sounds/sonidoRespuestas/RestConcentrate.mp3";

import arbolSound from "../assets/sounds/arbol.mp3";
import arcoirisSound from "../assets/sounds/arcoiris.mp3";
import aranaSound from "../assets/sounds/arana.mp3";
import aveSound from "../assets/sounds/ave.mp3";
import avionSound from "../assets/sounds/avion.mp3";
import AbejaSound from "../assets/sounds/Abeja.mp3";
import anilloSound from "../assets/sounds/anillo.mp3";
import alasSound from "../assets/sounds/alas.mp3";
import astronautaSound from "../assets/sounds/astronauta.mp3";
import elefanteSound from "../assets/sounds/elefante.mp3";
import estrellaSound from "../assets/sounds/estrella.mp3";
import islaSound from "../assets/sounds/isla.mp3";
import insectosSound from "../assets/sounds/insectos.mp3";
import osoSound from "../assets/sounds/oso.mp3";
import utilesSound from "../assets/sounds/utiles.mp3";
import uvaSound from "../assets/sounds/uva.mp3";

export {
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
};
export const goodAnswer = [audio1, audio2, siAudio3, siAudio4, siAudio5].sort(
  () => Math.random() - 0.5
);
export const wrongAnswer = [
  audio3,
  audio4,
  noAudio5,
  noAudio6,
  noAudio7,
  noAudio8,
  noAudio9,
].sort(() => Math.random() - 0.5);
