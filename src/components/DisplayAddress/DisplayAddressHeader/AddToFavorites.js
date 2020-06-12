import React from "react";

import { useSelector } from "react-redux";

import heart from "assets/images/heartIcon.png";
import hearIconOutline from "assets/images/hearIconOutline.png";
import { helperFunctions } from "helpers/functions";
import { showNotification } from "utils/toastNotifications";

export default () => {
  const [like, setLike] = React.useState(false);
  const { currentWeather } = useSelector((state) => state.weather);
  let favoriteAddresses = JSON.parse(localStorage.getItem("favorites")) || {};

  React.useEffect(() => {
    // detect if current weather is in favorites list
    if (helperFunctions.validObjectWithKeys(favoriteAddresses)) {
      const isFavorite = favoriteAddresses[parseInt(currentWeather.key)];
      if (isFavorite && !like) {
        setLike(true);
      }
    }
  }, [currentWeather]);

  const handleAddToFavorites = () => {
    if (like) {
      if (favoriteAddresses[currentWeather.key]) {
        // delete address from local storage
        delete favoriteAddresses[currentWeather.key];
      }
    } else {
      // add new address to local storage
      const saveCurrentWeather = {};
      saveCurrentWeather[currentWeather.key] = { ...currentWeather };

      favoriteAddresses = { ...favoriteAddresses, ...saveCurrentWeather };
      showNotification(
        `You added ${currentWeather.name} to favorite list!`,
        "success"
      );
    }

    //update local storage and like icon
    localStorage.setItem("favorites", JSON.stringify(favoriteAddresses));
    setLike(!like);
  };

  return (
    <div
      className="add-to-favorite-address pointer"
      onClick={handleAddToFavorites}
    >
      <img src={like ? heart : hearIconOutline} />
    </div>
  );
};
