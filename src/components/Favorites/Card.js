import React from "react";
import { StyledWeatherCard } from "styles";
import Animation from "./LottieAnimation";
import { helperFunctions } from "helpers/functions";
import { Redirect } from "react-router-dom";

export default ({ address, history }) => {
  const [weather, setWeather] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);

  const generateTemp = () => Math.floor(Math.random() * 5);

  React.useEffect(() => {
    const temps = ["-5", "10", "27", "35"];
    setWeather(helperFunctions.detectWeather(temps[generateTemp()])); //currentWeather.celsius
  }, []);

  if (redirect) {
    return <Redirect to={`/main/${redirect}`} />;
  }

  return (
    <StyledWeatherCard
      className="pointer noselect"
      onClick={() => setRedirect(address.key)}
    >
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
