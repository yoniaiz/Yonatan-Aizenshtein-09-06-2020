import React from "react";
import loader from "assets/animations/loader.json";
import LottieLoader from "./LottieLoader";

export default () => {
  return (
    <div className="loading-page">
      <LottieLoader animationJson={loader} />
    </div>
  );
};
