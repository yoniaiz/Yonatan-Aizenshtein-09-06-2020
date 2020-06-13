import React from "react";
import lottie from "lottie-web";
import wind from "assets/animations/wind.json";
import rain from "assets/animations/rain.json";

export default () => {
  let cloud_animation = null;
  React.useEffect(() => {
    lottie.loadAnimation({
      container: cloud_animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: wind,
    });
  }, []);

  return <div className="cloud" ref={(ref) => (cloud_animation = ref)} />;
};
