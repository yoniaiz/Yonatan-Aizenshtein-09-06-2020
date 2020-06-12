import React from "react";
import AddToFavorites from "./AddToFavorites";

export default ({
  currentWeather: { name, text, celsius, fahrenheit, isDayTime },
}) => {
  return (
    <div className="weather-box-header">
      <div className="selected-address">
        <div>{name}</div>
        <div>{fahrenheit}°F</div>
      </div>
      <div className="deg-measure">°F</div>
      <AddToFavorites/>
    </div>
  );
};
