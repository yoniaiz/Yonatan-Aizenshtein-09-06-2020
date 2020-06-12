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
  const [measurement, setMeasurement] = React.useState("f");

  if (
    Object.keys(forecast).length === 0 ||
    Object.keys(currentWeather).length === 0
  )
    return null;

  return (
    <StyledWeatherBox>
      <DisplayAddressHeader
        currentWeather={currentWeather}
        measurement={measurement}
        setMeasurement={setMeasurement}
      />
      <FiveDayForecast forecast={forecast} measurement={measurement} />
    </StyledWeatherBox>
  );
};
