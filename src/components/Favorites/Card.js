import React from "react";
import { StyledWeatherCard } from "styles";
import { Redirect } from "react-router-dom";

//redux
import { updateCurrentWeather } from "redux-store/actions";
import { useDispatch } from "react-redux";
//helpers
import { helperFunctions } from "helpers/functions";
//components
import MeasurementToggle from "utils/MeasureMethod";
import Animation from "./LottieAnimation";

export default ({ address, history }) => {
  const [weather, setWeather] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);
  const [measurement, setMeasurement] = React.useState("f");

  const dispatch = useDispatch();

  React.useEffect(() => {
    setWeather(helperFunctions.detectWeather(address.celsius));
  }, [address,address.celsius]);

  if (redirect) {
    dispatch(updateCurrentWeather(address));
    return <Redirect to={`/main/${redirect}`} />;
  }

  return (
    <StyledWeatherCard
      className="pointer noselect"
      onClick={() => setRedirect(address.key)}
    >
      <div className="card-header">
        <MeasurementToggle
          measurement={measurement}
          setMeasurement={setMeasurement}
          dataFor={address.key}
        />
        {weather && <Animation display={weather} />}
      </div>
      <div className="card-footer">
        <h3>
          {Math.round(address[measurement === "f" ? "fahrenheit" : "celsius"])}°
          {measurement.toUpperCase()}
        </h3>
        <span>{address.name}</span>
      </div>
    </StyledWeatherCard>
  );
};
