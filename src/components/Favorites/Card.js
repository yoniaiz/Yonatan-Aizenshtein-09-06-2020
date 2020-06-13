import React from "react";
import { StyledWeatherCard } from "styles";

export default ({ address }) => {
  return <StyledWeatherCard>{address.name}</StyledWeatherCard>;
};
