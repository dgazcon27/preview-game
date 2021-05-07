import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { iconBack, logo } from "../../utils/imagesResources";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { state } = useContext(GameContext);
  const history = useHistory();
  return (
    <div>
      <header>
        <div className="headerBoxIcon">
          <img
            onClick={() => history.goBack()}
            className="iconBack"
            alt="iconBack"
            src={iconBack}
          />
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
