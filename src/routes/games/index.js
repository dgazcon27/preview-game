import React, { useRef, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import DragComponent from "../../components/shared/DragComponent";
import {
  iconBack,
  logo,
  background,
  iconSound,
} from "../../utils/imagesResources";
import { data } from "../../utils/mocks";

import "../../assets/styles/games.css";
import "../../assets/styles/main.css";
import ResponseComponent from "../../components/shared/ResponseComponent";

import { GameContext } from "../../context/GameContext";

const title = "Coloca la palabra al frente de cada imagen correspondiente";
const Games = () => {
  const { state } = useContext(GameContext);

  const [position, setPosition] = useState(0);
  let history = useHistory();
  const [statusWord, setStatusWord] = useState({
    word1: false,
    word2: false,
  });
  const boxResponse1 = useRef(null);
  const boxResponse2 = useRef(null);

  const list = data[position];

  useEffect(() => {
    if (statusWord.word1 && statusWord.word2) {
      // setList(data[position + 1]);
      if (position + 1 < data.length) {
        setPosition(position + 1);
        setStatusWord({
          word1: false,
          word2: false,
        });
      } else {
        history.push("congratulations");
      }
    }
  }, [statusWord, position, history]);

  return (
    <div className="containerGame">
      <img alt="background" src={background} className="backgroundImage" />
      <header>
        <div className="headerBoxIcon">
          <img alt="iconBack" src={iconBack} />
        </div>
        <div className="titleGame">
          <img src={iconSound} alt="iconSound" />
          <h2>{title}</h2>
        </div>
        <div className="headerBoxIcon headerRightBox">
          <div className="pointsBox">
            <p>P{state.points}</p>
          </div>
          <img src={logo} width="width: 5em" alt="logo" />
        </div>
      </header>

      <div className="containerBox">
        <div className="containerOptions">
          <div className="cardImage">
            <img src={list.word1.image} alt={list.word1.name} />
          </div>
          <ResponseComponent
            reference={boxResponse1}
            word={list.word1.name}
            styles="containerResponse"
            position="word1"
          />
        </div>
        <div className="containerWords">
          <DragComponent
            word={list.word2.name}
            divResponse={[boxResponse1, boxResponse2]}
            setStatusWord={setStatusWord}
            statusWord={statusWord}
          >
            <img src={iconSound} alt="iconSound" />
            <h3>{list.word2.name}</h3>
          </DragComponent>
          <DragComponent
            word={list.word1.name}
            divResponse={[boxResponse1, boxResponse2]}
            setStatusWord={setStatusWord}
            statusWord={statusWord}
          >
            <img src={iconSound} alt="iconSound" />
            <h3>{list.word1.name}</h3>
          </DragComponent>
        </div>
        <div className="containerOptions">
          <div className="cardImage">
            <img src={list.word2.image} alt={list.word2.name} />
          </div>
          <ResponseComponent
            reference={boxResponse2}
            word={list.word2.name}
            styles="containerResponse"
            position="word2"
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
