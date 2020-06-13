import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";
import Cloud from "./Cloud";

export default ({nightMode}) => {
  return (
    <div className="weather-animations-container">
      <Cloud/>
      {nightMode ? <Moon /> : <Sun />}
    </div>
  );
};
