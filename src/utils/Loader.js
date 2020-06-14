import React from "react";
import loader from "assets/animations/loader.json";
import LottieLoader from "./LottieLoader";

export default () => {
  return (
    <div className="full-screen-wrapper loading-page">
      <div className="loader-container">
        <LottieLoader animationJson={loader} classes="loader" />
        <h1>
          Loading
          {[1, 1.2, 1.5].map((i) => (
            <span
              key={i}
              className="dots"
              style={{ animationDelay: `${i - 1}s` }}
            >
              .
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};
