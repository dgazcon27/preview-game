import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

import { iconSound, iconSoundWhite } from "../../utils/imagesResources";
import titleSound from "../../assets/sounds/moduloVocabulario.mp3";

import DragComponent from "../../components/games/DragComponent";
import ResponseComponent from "../../components/games/ResponseComponent";

import Header from "../../components/shared/Header";
import { data } from "../../utils/mocks";
import { getData } from "../../utils/mockData/mockModule1";
import "../../assets/styles/games.css";
import "../../assets/styles/main.css";
import CongratulationScreen from "../../components/shared/CongratulationScreen";
import { useSetBackGround } from "../../hooks/useSetBackGround";
import backGround from "../../assets/images/background_tramas.svg";

const title = "Coloca la palabra al frente de cada imagen correspondiente";
const Games = () => {
  let history = useHistory();
  useSetBackGround(backGround);

  const [position, setPosition] = useState(0);
  const [isLevelUp, setIsLevelUp] = useState(false);
  const [statusWord, setStatusWord] = useState({
    word1: false,
    word2: false,
  });
  const [transition, setTransition] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState({});
  const boxResponse1 = useRef(null);
  const boxResponse2 = useRef(null);

  const playSound = (sound) => {
    let snd = new Audio(sound);
    snd.play();
  };

  useEffect(() => {
    if (statusWord.word1 && statusWord.word2) {
      if (position + 1 < list.length) {
        setPosition(position + 1);
        setStatusWord({
          word1: false,
          word2: false,
        });
        setCurrent(list[position + 1]);
        setTransition(true);
      } else {
        history.push("level-up");
      }
    }
  }, [statusWord, position, history, list]);

  useEffect(() => {
    if (transition) {
      let tl = gsap.timeline();
      tl.from(".containerBox", {
        duration: 1,
        opacity: 0,
        x: window.innerWidth,
        onComplete: function () {
          setTransition(false);
        },
      });
    }
  }, [transition]);

  useEffect(() => {
    let x = getData();
    x.then(function (data) {
      setList(data);
      setCurrent(data[0]);
      setIsLoading(true);
    });
  }, []);

  if (!isLoading) return <div></div>;

  return (
    <div
      className="containerGame"
      style={transition ? { overflowX: "hidden" } : {}}
    >
      <Header></Header>
      <div className="titleGame">
        <h2>
          <img
            onClick={() => playSound(titleSound)}
            src={iconSound}
            alt="iconSound"
          />
          <audio src={titleSound} autoPlay />
          {title}
        </h2>
      </div>
      <div className="containerBox">
        <div className="containerOptions">
          <div className="cardImage">
            <img
              className="imageCard"
              src={current.word1.image}
              alt={current.word1.name}
            />
          </div>
          <ResponseComponent
            reference={boxResponse1}
            word={current.word1.name}
            styles="containerResponse"
            position="word1"
          />
        </div>
        <div className={`${isLevelUp ? "hidden" : ""} containerWords`}>
          <DragComponent
            word={current.word2.name}
            divResponse={[boxResponse1, boxResponse2]}
            setStatusWord={setStatusWord}
            statusWord={statusWord}
          >
            <img
              onClick={() => playSound(current.word2.sound)}
              src={iconSoundWhite}
              alt="iconSound"
            />
            <h3>{current.word2.name}</h3>
          </DragComponent>
          <DragComponent
            word={current.word1.name}
            divResponse={[boxResponse1, boxResponse2]}
            setStatusWord={setStatusWord}
            statusWord={statusWord}
          >
            <img
              onClick={() => playSound(current.word1.sound)}
              src={iconSoundWhite}
              alt="iconSound"
            />
            <h3>{current.word1.name}</h3>
          </DragComponent>
        </div>
        <div className="containerOptions">
          <div className="cardImage">
            <img
              className="imageCard"
              src={current.word2.image}
              alt={current.word2.name}
            />
          </div>
          <ResponseComponent
            reference={boxResponse2}
            word={current.word2.name}
            styles="containerResponse"
            position="word2"
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
