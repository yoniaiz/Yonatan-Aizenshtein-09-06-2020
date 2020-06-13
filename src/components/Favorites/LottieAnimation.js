import React from "react";
import lottie from "lottie-web";

//animations
import rain from "assets/animations/rain.json";
import sun_cloud from "assets/animations/sun_cloud.json";
import sun_snow from "assets/animations/sun_snow.json";
import sun from "assets/animations/sun.json";

export default ({ display }) => {
  let animation = null;
  console.log(display)
  React.useEffect(() => {
    lottie.loadAnimation({
      container: animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData:
        display === "rain"
          ? rain
          : display === "sun"
          ? sun
          : display === "snow"
          ? sun_snow
          : sun_cloud,
    });
  }, []);

  return (
    <div className="card-weather-animation" ref={(ref) => (animation = ref)} />
  );
};
