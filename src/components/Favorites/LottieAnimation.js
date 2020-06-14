import React from "react";
//animations
import rain from "assets/animations/rain.json";
import sun_cloud from "assets/animations/sun_cloud.json";
import sun_snow from "assets/animations/sun_snow.json";
import sun from "assets/animations/sun.json";

import LottieLoader from "utils/LottieLoader";

export default ({ display }) => {
  const [animation, setAnimation] = React.useState(null);

  React.useEffect(() => {
    setAnimation(
      display === "rain"
        ? rain
        : display === "sun"
        ? sun
        : display === "snow"
        ? sun_snow
        : sun_cloud
    );
  }, []);

  return (
    animation && (
      <LottieLoader
        classes="card-weather-animation"
        animationJson={animation}
      />
    )
  );
};
