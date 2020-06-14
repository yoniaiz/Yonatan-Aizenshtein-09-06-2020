import React from "react";
import wind from "assets/animations/wind.json";
import rain from "assets/animations/rain.json";
import { useSelector } from "react-redux";
import { helperFunctions } from "helpers/functions";
import LottieLoader from "utils/LottieLoader";

export default () => {
  const { currentWeather } = useSelector((state) => state.weather);
  const [type, setType] = React.useState(null);

  React.useEffect(() => {
    const t = helperFunctions.detectWeather(currentWeather.celsius);
    if (!helperFunctions.validObjectWithKeys(currentWeather) || t === "sun")
      return;

    setType(t);
  }, [currentWeather]);

  return (
    type &&
    type !== "sun" && (
      <LottieLoader
        animationJson={type === "cloud" ? wind : rain}
        classes="cloud"
      />
    )
  );
};
