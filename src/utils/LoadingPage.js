import React from "react";
import mainLoader from "assets/animations/mainLoader.json";
import LottieLoader from "./LottieLoader";

export default () => {
  return (
    <div className="full-screen-wrapper main-loading-page">
      <LottieLoader animationJson={mainLoader} />
    </div>
  );
};
