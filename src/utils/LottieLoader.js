import React from "react";
import lottie from "lottie-web";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default ({ animationJson, classes = "" }) => {
  const [id, setId] = React.useState(null);

  let animation = null;

  const loadAnimation = () => {
    lottie.loadAnimation({
      container: animation,
      renderer: "svg",
      name: `${id}animation`,
      loop: true,
      autoplay: true,
      animationData: animationJson,
    });
  };

  const newAnimation = () => {
    setId(makeid(10));
    loadAnimation();
  };

  React.useEffect(() => {
    newAnimation();
  }, []);

  React.useEffect(() => {
    if (id) {
      lottie.destroy();
      newAnimation();
    }
  }, [animationJson]);

  return <div className={classes} ref={(ref) => (animation = ref)} />;
};
