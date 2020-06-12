import React from "react";
import lottie from "lottie-web";
import moon from "assets/animations/moon.json";

export default () => {
  let moon_animation = null;
  React.useEffect(() => {
    lottie.loadAnimation({
      container: moon_animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: moon,
    });
  }, []);

  return <div className="moon" ref={(ref) => (moon_animation = ref)} />;
};
