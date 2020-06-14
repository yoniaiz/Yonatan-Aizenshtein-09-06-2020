import React from "react";
import mainLoader from "assets/animations/mainLoader.json";
import LottieLoader from "./LottieLoader";

export default () => {
  return (
    <div className="main-loading-page">
      <LottieLoader animationJson={mainLoader} />
    </div>
  );
};
