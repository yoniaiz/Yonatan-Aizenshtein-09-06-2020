import React from "react";
import moon from "assets/animations/moon.json";
import LottieLoader from "utils/LottieLoader";

export default () => {
  return <LottieLoader animationJson={moon} classes={"moon"} />;
};
