import React from "react";
import { helperFunctions } from "helpers/functions";

export default ({ forecast: { date, maxTemp, minTemp, day, night } }) => {
  return (
    <div data-testid="forecast" className="forecast">
      <h4>{helperFunctions.getDayOfTheWeek(date)}</h4>
      <span>{(maxTemp.f + minTemp.f) / 2}°F</span>
    </div>
  );
};
