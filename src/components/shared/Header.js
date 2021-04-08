import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { iconBack, logo } from "../../utils/imagesResources";
const Header = () => {
  const { state } = useContext(GameContext);

  return (
    <div>
      <header>
        <div className="headerBoxIcon">
          <img alt="iconBack" src={iconBack} />
        </div>
        <div className="headerBoxIcon headerRightBox">
          <div className="pointsBox">
            <p>P{state.points}</p>
          </div>
          <img src={logo} width="width: 5em" alt="logo" />
        </div>
      </header>
    </div>
  );
};

export default Header;
