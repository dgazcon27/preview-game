import React, { useEffect, useState, useRef } from "react";
import DragComponent from "../../components/shared/DragComponent";
import {
  iconBack,
  logo,
  background,
  iconSound,
  cancelIcon,
  checkIcon,
} from "../../utils/imagesResources";
import { data } from "../../utils/mocks";

import { abeja, arbol } from "../../utils/imagesGames";

import "../../assets/styles/games.css";
import "../../assets/styles/main.css";
import BoardComponent from "../../components/shared/BoardComponent";

const title = "Coloca la palabra al frente de cada imagen correspondiente";
const Games = () => {
  const [state, setState] = useState({
    statusWord1: null,
    statusWord2: null,
  });

  const boxResponse1 = useRef(null);
  const boxResponse2 = useRef(null);

  return (
    <div className="containerGame">
      <img alt="background" src={background} className="backgroundImage" />
      <header>
        <div className="headerBoxIcon">
          <img alt="iconBack" src={iconBack} />
        </div>
        <div className="headerBoxIcon">
          <img src={logo} width="width: 5em" alt="logo" />
        </div>
      </header>
      <div className="titleGame">
        <img src={iconSound} alt="iconSound" />
        <h2>{title}</h2>
      </div>
      <div className="containerBox">
        <div>
          <div className="cardImage">
            <img src={arbol} alt="arbol" />
          </div>
          <div
            ref={boxResponse1}
            data-word="arbol"
            className="containerResponse"
            data-container="response1"
          ></div>
          <img
            alt="result"
            src={state.statusWord1 ? checkIcon : cancelIcon}
            className={state.statusWord1 ? "iconCheck" : "iconCancel"}
          />
        </div>
        <div className="containerWords">
          <DragComponent
            word="abeja"
            divResponse={[boxResponse1, boxResponse2]}
          >
            <img src={iconSound} alt="iconSound" />
            <h3>Abeja</h3>
          </DragComponent>
          <DragComponent
            word="arbol"
            divResponse={[boxResponse1, boxResponse2]}
          >
            <img src={iconSound} alt="iconSound" />
            <h3>Arbol</h3>
          </DragComponent>
        </div>
        <div>
          <div className="cardImage">
            <img src={abeja} alt="abeja" />
          </div>
          <div
            ref={boxResponse2}
            data-word="abeja"
            className="containerResponse"
            data-container="response1"
          ></div>
          <img
            alt="result"
            src={state.statusWord2 ? checkIcon : cancelIcon}
            className={state.statusWord2 ? "iconCheck" : "iconCancel"}
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
