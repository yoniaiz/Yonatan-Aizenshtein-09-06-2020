import React from "react";
import Headline from "./Headline";
import Forecast from "./Forecast";

export default ({ forecast: { headline, dailyForecast } }) => {
  return (
    <div>
      <Headline headline={headline} />
      <div>
        {dailyForecast.map((forecast,index) => (
          <Forecast forecast={forecast} key={index} />
        ))}
      </div>
    </div>
  );
};
