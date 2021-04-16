import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

import { iconSound, iconSoundWhite } from "../../utils/imagesResources";
import titleSound from "../../assets/sounds/moduloVocabulario.mp3";

import DragComponent from "../../components/games/DragComponent";
import ResponseComponent from "../../components/games/ResponseComponent";
import BackgroundComponent from "../../components/shared/BackgroundComponent";

import Header from "../../components/shared/Header";
import { data } from "../../utils/mocks";
import "../../assets/styles/games.css";
import "../../assets/styles/main.css";
import CongratulationScreen from "../shared/CongratulationScreen";
import background from "../../assets/images/background_tramas.svg";

const title = "Coloca la palabra al frente de cada imagen correspondiente";
const Games = () => {
  let history = useHistory();

  const [position, setPosition] = useState(0);
  const [isLevelUp, setIsLevelUp] = useState(true);
  const [statusWord, setStatusWord] = useState({
    word1: false,
    word2: false,
  });
  const [transition, setTransition] = useState(false);
  const boxResponse1 = useRef(null);
  const boxResponse2 = useRef(null);

  const list = data[position];

  const playSound = (sound) => {
    let snd = new Audio(sound);
    snd.play();
  };

  useEffect(() => {
    if (statusWord.word1 && statusWord.word2) {
      // setList(data[position + 1]);
      if (position + 1 < data.length) {
        setPosition(position + 1);
        setStatusWord({
          word1: false,
          word2: false,
        });
        setTransition(true);
      } else {
        setIsLevelUp(true);
        // history.push("congratulations");
      }
    }
  }, [statusWord, position, history]);

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
    let snd = new Audio(titleSound);
    snd.play();
  }, []);

  return (
    <div className="containerGame">
      <BackgroundComponent source={background} />
      {/* <audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio> */}
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
            <img
              className="imageCard"
              src={list.word1.image}
              alt={list.word1.name}
            />
          </div>
          <ResponseComponent
            reference={boxResponse1}
            word={list.word1.name}
            styles="containerResponse"
            position="word1"
          />
        </div>
        <div className={`${isLevelUp ? "hidden" : ""} containerWords`}>
          <DragComponent
            word={list.word2.name}
            divResponse={[boxResponse1, boxResponse2]}
            setStatusWord={setStatusWord}
            statusWord={statusWord}
          >
            <img
              onClick={() => playSound(list.word2.sound)}
              src={iconSoundWhite}
              alt="iconSound"
            />
            <h3>{list.word2.name}</h3>
          </DragComponent>
          <DragComponent
            word={list.word1.name}
            divResponse={[boxResponse1, boxResponse2]}
            setStatusWord={setStatusWord}
            statusWord={statusWord}
          >
            <img
              onClick={() => playSound(list.word1.sound)}
              src={iconSoundWhite}
              alt="iconSound"
            />
            <h3>{list.word1.name}</h3>
          </DragComponent>
        </div>
        <div className="containerOptions">
          <div className="cardImage">
            <img
              className="imageCard"
              src={list.word2.image}
              alt={list.word2.name}
            />
          </div>
          <ResponseComponent
            reference={boxResponse2}
            word={list.word2.name}
            styles="containerResponse"
            position="word2"
          />
        </div>
      </div>
      <CongratulationScreen isVisible={isLevelUp}></CongratulationScreen>
    </div>
  );
};

export default Games;
