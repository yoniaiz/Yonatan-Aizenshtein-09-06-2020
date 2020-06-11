import React from "react";
import Headline from "./Headline";
import Forecast from "./Forecast";

export default ({ forecast: { headline, dailyForecast } }) => {
  return (
    <div className="forecast-container">
      <Headline headline={headline} />
      <div className="five-day-container">
        {dailyForecast.map((forecast,index) => (
          <Forecast forecast={forecast} key={index} />
        ))}
      </div>
    </div>
  );
};
