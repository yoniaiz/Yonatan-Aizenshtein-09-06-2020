import React from "react";
import { StyledWeatherCard } from "styles";
import Animation from "./LottieAnimation";
import { helperFunctions } from "helpers/functions";

export default ({ address }) => {
  const [weather, setWeather] = React.useState(null);
  const generateTemp = () => Math.floor(Math.random() * 5);

  React.useEffect(() => {
    const temps = ["-5", "10", "27", "35"];
    setWeather(helperFunctions.detectWeather(temps[generateTemp()]));
  }, []);

  return (
    <StyledWeatherCard className="pointer noselect">
      <div className="card-header">
        {weather && <Animation display={weather} />}
      </div>
      <div className="card-footer">
        <h3>{address.fahrenheit}°F</h3>
        <span>{address.name}</span>
      </div>
    </StyledWeatherCard>
  );
};
