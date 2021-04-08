import React, { useEffect, useState } from "react";
import "../../assets/styles/shared-screen.css";
import logoKoala from "../../assets/images/koalaSinFondo.svg";

const ComponentPortrait = () => {
  const [container, setContainer] = useState(initialHeight());
  const [isLandscape, setIsLandscape] = useState(getOrientation());

  useEffect(() => {
    const updateScreenHeight = () => {
      let height = window.innerHeight;
      setContainer({
        height1: isLandscape ? height : height / 2,
        height2: height,
      });
    };
    window.addEventListener("resize", updateScreenHeight);

    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, [isLandscape]);

  useEffect(() => {
    const orientationChange = () => {
      console.log("change orientation");
      setIsLandscape(getOrientation());
    };

    window.addEventListener("orientationchange", orientationChange);

    return () => {
      window.removeEventListener("orientationchange", orientationChange);
    };
  }, []);

  return (
    <div className="container-sup">
      <div
        className="container-first"
        style={{ height: `${container.height1}px` }}
      ></div>
      <img className="logo" src={logoKoala} alt="logoKoala" />
      <div
        className="container-second"
        style={{ height: `${container.height2}px` }}
      >
        <div className="text-box">
          <p>!Felicitaciones¡</p>
          <p>Lo has logrado</p>
        </div>
      </div>
    </div>
  );
};

const CongratulationScreen = () => {
  return (
    <div>
      <ComponentPortrait />
    </div>
  );
};

function initialHeight() {
  let height = window.innerHeight;
  let isLandscape = getOrientation();
  return {
    height1: isLandscape ? height : height / 2,
    height2: height,
  };
}

function getOrientation() {
  var orientation =
    (window.screen.orientation || {}).type ||
    window.screen.mozOrientation ||
    window.screen.msOrientation;

  if (orientation === "landscape-primary") {
    return true;
  }
  if (orientation === "landscape-secondary") {
    return true;
  }
  if (orientation.angle > 60) {
    return true;
  }

  return false;
}

export default CongratulationScreen;
