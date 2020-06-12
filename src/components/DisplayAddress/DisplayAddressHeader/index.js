import React from "react";
import AddToFavorites from "./AddToFavorites";
import MeasureMethod from "./MeasureMethod";

export default ({
  currentWeather: { name, celsius, fahrenheit },
  measurement,
  setMeasurement,
}) => {
  return (
    <div className="weather-box-header">
      <div className="selected-address">
        <div>{name}</div>
        <div>{measurement === "f" ? `${fahrenheit}°F` : `${celsius}°C`}</div>
      </div>
      <MeasureMethod
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <AddToFavorites />
    </div>
  );
};
