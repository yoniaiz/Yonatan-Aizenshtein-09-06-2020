import React from "react";
//redux
import { useSelector } from "react-redux";
//styled components
import { StyledWeatherBox } from "styles";
//components
import FiveDayForecast from "./FiveDayForecast";
import DisplayAddressHeader from "./DisplayAddressHeader";

export default () => {
  const { forecast, currentWeather } = useSelector((state) => state.weather);
  if (
    Object.keys(forecast).length === 0 ||
    Object.keys(currentWeather).length === 0
  )
    return null;

  return (
    <StyledWeatherBox>
      <DisplayAddressHeader currentWeather={currentWeather} />
      <FiveDayForecast forecast={forecast} />
    </StyledWeatherBox>
  );
};
