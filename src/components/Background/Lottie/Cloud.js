import React from "react";
import lottie from "lottie-web";
import wind from "assets/animations/wind.json";
import rain from "assets/animations/rain.json";
import { useSelector } from "react-redux";
import { helperFunctions } from "helpers/functions";

export default () => {
  const { currentWeather } = useSelector((state) => state.weather);

  let cloud_animation = null;

  React.useEffect(() => {
    const type = helperFunctions.detectWeather(currentWeather.celsius);
    if (!helperFunctions.validObjectWithKeys(currentWeather) || type === "sun") return;

    lottie.loadAnimation({
      container: cloud_animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: type === "cloud" ? wind : rain,
    });
  }, [currentWeather]);

  return <div className="cloud" ref={(ref) => (cloud_animation = ref)} />;
};
