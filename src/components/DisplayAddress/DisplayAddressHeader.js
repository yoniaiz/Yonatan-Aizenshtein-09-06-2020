import React from "react";
import heart from "assets/images/heartIcon.png";
import hearIconOutline from "assets/images/hearIconOutline.png";

export default ({
  currentWeather: { name, text, celsius, fahrenheit, isDayTime },
}) => {
  const [like, setLike] = React.useState(false);

  return (
    <div className="weather-box-header">
      <div className="selected-address">
        <div>{name}</div>
        <div>{fahrenheit}°F</div>
      </div>
      <div className="deg-measure">°F</div>
      <div className="add-to-favorite-address" onClick={() => setLike(!like)}>
        <img src={like ? heart : hearIconOutline} />
      </div>
    </div>
  );
};
