import React from "react";
//redux
import { useSelector } from "react-redux";
//styled components
import { StyledWeatherBox } from "styles";
//helpers
import { helperFunctions } from "helpers/functions";
//components
import FiveDayForecast from "./FiveDayForecast";
import DisplayAddressHeader from "./DisplayAddressHeader";

export default () => {
  const { forecast, currentWeather } = useSelector((state) => state.weather);
  const [measurement, setMeasurement] = React.useState("f");

  if (
    !helperFunctions.validObjectWithKeys(forecast) ||
    !helperFunctions.validObjectWithKeys(currentWeather)
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
