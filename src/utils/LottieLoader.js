import React from "react";
import lottie from "lottie-web";

export default ({ animationJson, classes = "" }) => {
  let animation = null;
  React.useEffect(() => {
    lottie.loadAnimation({
      container: animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationJson,
    });
  }, []);

  return <div className={classes} ref={(ref) => (animation = ref)} />;
};
