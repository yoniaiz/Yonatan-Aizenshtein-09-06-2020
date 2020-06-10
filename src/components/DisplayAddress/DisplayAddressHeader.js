import React from "react";

export default ({
  currentWeather: { name, text, celsius, fahrenheit, isDayTime },
}) => {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{fahrenheit}°f</div>
      </div>
      <div>Like</div>
    </div>
  );
};
