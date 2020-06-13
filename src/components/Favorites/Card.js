import React from "react";
import { StyledWeatherCard } from "styles";
import { Redirect } from "react-router-dom";

//redux
import { updateCurrentWeather } from "redux-store/actions";
import { useDispatch } from "react-redux";
//helpers
import { helperFunctions } from "helpers/functions";
//components
import Animation from "./LottieAnimation";

export default ({ address, history }) => {
  const [weather, setWeather] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setWeather(helperFunctions.detectWeather(address.celsius));
  }, []);

  if (redirect) {
    dispatch(updateCurrentWeather(address))
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
