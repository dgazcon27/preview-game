import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { iconSound } from "../../utils/imagesResources";

import DragComponent from "../../components/games/DragComponent";
import ResponseComponent from "../../components/games/ResponseComponent";
import Header from "../../components/shared/Header";
import { data } from "../../utils/mocks";

import "../../assets/styles/games.css";
import "../../assets/styles/main.css";

const title = "Coloca la palabra al frente de cada imagen correspondiente";
const Games = () => {
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
      <Header></Header>
      <div className="titleGame">
        <h2>
          <img src={iconSound} alt="iconSound" />
          {title}
        </h2>
      </div>
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
