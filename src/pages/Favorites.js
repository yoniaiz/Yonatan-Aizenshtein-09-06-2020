import React from "react";
//redux
import { getAllFavoritesCurrentWeather } from "redux-store/actions";
import { useSelector, useDispatch } from "react-redux";
//helper
import { helperFunctions } from "helpers/functions";
//utils
import ErrorBoundary from "utils/ErrorBoundary";
import { showNotification } from "utils/toastNotifications";
//components
import Favorites from "components/Favorites";

export default () => {
  const { favorite } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const cachedFavorites = JSON.parse(localStorage.getItem("favorites"));

  React.useEffect(() => {
    if (!helperFunctions.validObjectWithKeys(cachedFavorites)) {
      showNotification("You did not choose any favorite addresses");
    } else {
      // dispatch(getAllFavoritesCurrentWeather(cachedFavorites, favorite));
    }
  }, []);

  return (
    <ErrorBoundary>
      <div data-testid="favorite-page" className="favorites-container">
        <Favorites favorites={cachedFavorites} />
      </div>
    </ErrorBoundary>
  );
};
