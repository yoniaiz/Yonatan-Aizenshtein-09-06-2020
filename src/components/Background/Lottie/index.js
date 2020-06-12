import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";

export default ({nightMode}) => {
  return (
    <div className="weather-animations-container">
      {nightMode ? <Moon /> : <Sun />}
    </div>
  );
};
