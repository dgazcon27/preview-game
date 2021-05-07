import { useEffect, useState } from "react";

export function useDimesions() {
  const [dimesion, setDimesion] = useState(getDimesion());

  useEffect(() => {
    const resize = () => {
      setDimesion(getDimesion());
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return dimesion;
}

function getDimesion() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
