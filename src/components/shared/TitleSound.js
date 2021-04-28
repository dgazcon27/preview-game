import React from "react";
import { iconSound } from "../../utils/imagesResources";
import { usePlaySounds } from "../../hooks/usePlaySounds";

export const TitleSound = ({ title, titleSound }) => {
  const [playSound] = usePlaySounds();
  return (
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
  );
};

export default TitleSound;
