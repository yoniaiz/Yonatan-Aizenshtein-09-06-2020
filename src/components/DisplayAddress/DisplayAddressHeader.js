import React from "react";

export default ({
  currentWeather: { name, text, celsius, fahrenheit, isDayTime },
}) => {
  return (
    <div className="weather-box-header">
      <div className="selected-address">
        <div>{name}</div>
        <div>{fahrenheit}°F</div>
      </div>
      <div className="add-to-favorite-address">Like</div>
    </div>
  );
};
