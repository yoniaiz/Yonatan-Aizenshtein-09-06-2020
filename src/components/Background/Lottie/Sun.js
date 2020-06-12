import React from "react";
import lottie from "lottie-web";
import sun from "assets/animations/sun.json";

export default () => {
  let sun_animation = null;
  React.useEffect(() => {
    lottie.loadAnimation({
      container: sun_animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: sun,
    });
  }, []);

  return <div className="sun" ref={(ref) => (sun_animation = ref)} />;
};
