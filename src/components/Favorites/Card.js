import React from "react";
import { StyledWeatherCard } from "styles";
import Animation from "./LottieAnimation";

export default ({ address }) => {
  return (
    <StyledWeatherCard>
      <div className="card-header">
        <Animation />
      </div>
      <div className="card-footer">
        <h3>{address.fahrenheit}°F</h3>
        <span>{address.name}</span>
      </div>
    </StyledWeatherCard>
  );
};
