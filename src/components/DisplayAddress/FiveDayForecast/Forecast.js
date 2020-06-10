import React from "react";

export default ({ forecast: { date, maxTemp, minTemp, day, night } }) => {
  return (
    <div data-testid="forecast">
      {date} {maxTemp.f} {minTemp.f} {day} {night}
    </div>
  );
};
