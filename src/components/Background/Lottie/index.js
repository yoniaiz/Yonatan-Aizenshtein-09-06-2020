import React from "react";
import moon from "assets/animations/moon.json";
import sun from "assets/animations/sun.json";

import LottieLoader from "utils/LottieLoader";
import Cloud from "./Cloud";

export default ({ nightMode }) => {
  return (
    <div className="weather-animations-container">
      <Cloud />
      {nightMode ? (
        <LottieLoader animationJson={moon} classes={"moon"} />
      ) : (
        <LottieLoader animationJson={sun} classes={"sun"} />
      )}
    </div>
  );
};
