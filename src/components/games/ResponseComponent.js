import React from "react";
import { cancelIcon, checkIcon } from "../../utils/imagesResources";

const ResponseComponent = ({ word, styles, reference, position }) => {
  return (
    <div
      ref={reference}
      data-response={position}
      data-word={word.toLowerCase()}
      className={styles}
    >
      <img alt="result" src={cancelIcon} className={"iconCancel"} />
      <img alt="result" src={checkIcon} className={"iconCheck"} />
    </div>
  );
};

export default ResponseComponent;
