import React from "react";
import lottie from "lottie-web";

//animations
import rain from "assets/animations/rain.json";
import sun_cloud from "assets/animations/sun_cloud.json";
import sun_snow from "assets/animations/sun_snow.json";
import sun from "assets/animations/sun.json";

export default () => {
  let animation = null;
  React.useEffect(() => {
    lottie.loadAnimation({
      container: animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: rain,
    });
  }, []);

  return (
    <div className="card-weather-animation" ref={(ref) => (animation = ref)} />
  );
};
