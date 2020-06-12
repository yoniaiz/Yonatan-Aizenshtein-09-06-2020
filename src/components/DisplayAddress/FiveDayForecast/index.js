import React from "react";
import Headline from "./Headline";
import Forecast from "./Forecast";

export default ({ forecast: { headline, dailyForecast }, measurement }) => {
  return (
    <div className="forecast-container">
      <Headline headline={headline} />
      <div className="five-day-container">
        {dailyForecast.map((forecast, index) => (
          <Forecast forecast={forecast} key={index} measurement={measurement}/>
        ))}
      </div>
    </div>
  );
};
