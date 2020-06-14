import React from "react";
import lottie from "lottie-web";
import mainLoader from "assets/animations/mainLoader.json";

export default () => {
  const [display, setDisplay] = React.useState("flex");

  let animation = null;
  React.useEffect(() => {
    lottie.loadAnimation({
      container: animation,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: mainLoader,
    });
  }, []);

  return (
    <div className="main-loading-page" style={{ display }}>
      <div className="main-loader" ref={(ref) => (animation = ref)} />
    </div>
  );
};
