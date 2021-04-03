import React from "react";
import { cancelIcon, checkIcon, iconSound } from "../../utils/imagesResources";
import DragComponent from "./DragComponent";
const BoardComponent = ({ word1, word2 }) => {
  return (
    <div>
      <div className="containerBox">
        <div>
          <div className="cardImage">
            <img src={word1.image} alt={word1.name.toLowerCase()} />
            <div
              data-word={word1.name.toLowerCase()}
              className="containerResponse"
            ></div>
            <img alt="result" src={checkIcon} className="iconCheck" />
          </div>
        </div>
        <div className="containerWords">
          <DragComponent name={word1.name}>
            <img src={iconSound} alt="iconSound" />
            <h3>{word1.name}</h3>
          </DragComponent>
          <DragComponent name={word2.name}>
            <img src={iconSound} alt="iconSound" />
            <h3>{word2.name}</h3>
          </DragComponent>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BoardComponent;
