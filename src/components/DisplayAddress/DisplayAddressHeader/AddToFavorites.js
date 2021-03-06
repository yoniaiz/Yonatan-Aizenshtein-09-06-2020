import React from "react";
import ReactTooltip from "react-tooltip";
//redux
import { useSelector } from "react-redux";
//components
import heart from "assets/images/heartIcon.png";
import hearIconOutline from "assets/images/hearIconOutline.png";
//helpers
import { helperFunctions } from "helpers/functions";
//utils
import { showNotification } from "utils/toastNotifications";

export default () => {
  const [like, setLike] = React.useState(false);
  const { currentWeather } = useSelector((state) => state.weather);
  let favoriteAddresses = JSON.parse(localStorage.getItem("favorites")) || {};

  React.useEffect(() => {
    // detect if current weather is in favorites list
    if (helperFunctions.validObjectWithKeys(favoriteAddresses)) {
      const isFavorite = favoriteAddresses[parseInt(currentWeather.key)];
      if (isFavorite) {
        setLike(true);
      }else {
        setLike(false);
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
      data-testid="add-to-favorites"
      onClick={handleAddToFavorites}
    >
      <img
        src={like ? heart : hearIconOutline}
        data-tip={like ? "Remove from favorites" : "Add address to favorites"}
        data-for="heart"
      />
      <ReactTooltip effect="solid" place="left" type="light" id="heart" />
    </div>
  );
};
