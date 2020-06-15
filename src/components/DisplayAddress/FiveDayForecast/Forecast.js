import React from "react";
import { helperFunctions } from "helpers/functions";

export default ({ forecast: { date, maxTemp, minTemp }, measurement }) => {
  return (
    <div data-testid="forecast" className="forecast">
      <h4>{helperFunctions.getDayOfTheWeek(date)}</h4>
      <span>
        {Math.round(
          (maxTemp[measurement.toLowerCase()] +
            minTemp[measurement.toLowerCase()]) /
            2
        )}
        °{measurement.toUpperCase()}
      </span>
    </div>
  );
};
