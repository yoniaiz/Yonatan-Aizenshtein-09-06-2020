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

  const loadAnimation = (currentId) => {
    lottie.loadAnimation({
      container: animation,
      renderer: "svg",
      name: `${currentId}animation`,
      loop: true,
      autoplay: true,
      animationData: animationJson,
    });
  };

  const newAnimation = () => {
    const currentId = makeid(10);
    setId(currentId);
    loadAnimation(currentId);
  };

  React.useEffect(() => {
    newAnimation();
  }, []);

  React.useEffect(() => {
    if (id) {
      lottie.destroy(`${id}animation`);
      newAnimation();
    }
  }, [animationJson]);

  return <div className={classes} ref={(ref) => (animation = ref)} />;
};
