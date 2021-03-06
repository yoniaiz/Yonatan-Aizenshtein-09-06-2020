import {
  CURRENT_LOCATION,
  AUTOCOMPLETE,
  FIVE_DAY_FORECAST,
  CURRENT_WEATHER,
  RESET,
  GET_FAVORITES,
} from "./types";

import {
  api,
  CLEAR,
  SUCCESS,
  PAGE_LOADER,
  PAGE_LOADING_DONE,
} from "constants/index";
import { helperFunctions } from "helpers/functions";

import Dispatcher from "helpers/classes/Dispatcher";

const dispatcher = new Dispatcher();

export const reset = () => ({
  type: RESET,
});

/**
 * get current user location
 */
export const getCurrentLocation = () => async (dispatch) => {
  dispatcher.action = CURRENT_LOCATION;

  dispatcher.request(true, true);

  // tel aviv details for setting as default if current location not available
  const telAvivForFallback = {
    city: "Tel Aviv",
    address: "Tel Aviv",
    name: "Tel Aviv",
    country: "Israel",
    value: "215854",
    key: "215854",
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  try {
    async function success(pos) {
      const { latitude, longitude } = pos.coords;

      try {
        const response = await fetch(
          `${api.getAddressByCoords}?${api.apiKey}&q=${latitude},${longitude}`
        );

        const currentAddress = await response.json();

        const { LocalizedName, Country, Key } = currentAddress;

        const parsedCurrentAddress = {
          city: LocalizedName,
          country: Country.LocalizedName,
          value: Key,
          key: Key,
          address: LocalizedName,
        };

        dispatcher.success(parsedCurrentAddress);

        dispatch(setAddressWithDetails(parsedCurrentAddress));
      } catch (e) {
        dispatcher.failure({ message: "There is problems with the server..." });
        dispatcher.loadingDone(true);
      }
    }

    function error(err) {
      if (err.code === 1) {
        dispatcher.failure({ message: `You denied your location share...` });
      }
      dispatch(setAddressWithDetails(telAvivForFallback));
    }

    if (!navigator.geolocation) {
      dispatcher.failure({
        message: "Geolocation is not supported by your browser",
      });
      dispatch(setAddressWithDetails(telAvivForFallback));
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  } catch (e) {
    console.log(e);
    dispatch(setAddressWithDetails(telAvivForFallback));
  }

  dispatcher.loadingDone(true);
};

export const setAddressWithDetails = (option) => (dispatch) => {
  dispatch({
    type: `${AUTOCOMPLETE}${SUCCESS}`,
    payload: [{ ...option }],
  });

  dispatch(getFiveDayForecast(option));
};

export const placesAutocomplete = (str) => async () => {
  dispatcher.action = AUTOCOMPLETE;

  try {
    const response = await fetch(`${api.autocomplete}?${api.apiKey}&q=${str}`);
    const autocompletedAddresses = await response.json();

    const parsedAddresses = helperFunctions.autocompleteAddressesParser(
      autocompletedAddresses
    );

    dispatcher.success(parsedAddresses);
  } catch (e) {
    dispatcher.failure({ message: "Something went wrong" });
  } finally {
    dispatcher.loadingDone(true);
  }
};

export const clearAutocomplete = () => ({
  type: `${AUTOCOMPLETE}${CLEAR}`,
});

export const getFiveDayForecast = (
  selectedAddress,
  getCurrentLocation = true
) => async (dispatch) => {
  dispatcher.action = FIVE_DAY_FORECAST;

  dispatcher.request(true);

  try {
    const response = await fetch(
      `${api.forecasts}/${selectedAddress.value}?${api.apiKey}`
    );
    const forecast = await response.json();
    const parsedForecast = helperFunctions.forecastParser(forecast);

    dispatcher.success(parsedForecast);
    //get current weather if five day forecast was successful
    if (getCurrentLocation) dispatch(getCurrentWeather(selectedAddress));
  } catch {
    dispatcher.failure({ message: "Something went wrong" });
  } finally {
    dispatcher.loadingDone();
  }
};

export const getCurrentWeather = (selectedAddress) => async () => {
  dispatcher.action = CURRENT_WEATHER;

  dispatcher.request(true);

  try {
    const response = await fetch(
      `${api.currentConditions}/${selectedAddress.value}?${api.apiKey}`
    );
    const currentWeather = await response.json();

    const parsedCurrentWeather = {
      ...helperFunctions.currentWeatherParser(currentWeather, selectedAddress),
    };

    dispatcher.success(parsedCurrentWeather);
  } catch {
    dispatcher.failure({ message: "Something went wrong" });
  } finally {
    dispatcher.loadingDone();
  }
};

export const updateCurrentWeather = (selected) => (dispatch) => {
  const payload = {
    ...selected,
    name: selected.name ? selected.name : selected.address,
    value: selected.key,
  };

  dispatch({
    type: `${AUTOCOMPLETE}${SUCCESS}`,
    payload: [payload],
  });

  dispatch({
    type: `${CURRENT_WEATHER}${SUCCESS}`,
    payload,
  });
};

export const getAllFavoritesCurrentWeather = (
  cachedFavorites,
  currentFavorites
) => (dispatch) => {
  dispatch({
    type: PAGE_LOADER,
  });

  const filteredFavorites = [];

  // get all favorites that did not yet added to favorites on redux
  for (let [key, value] of Object.entries(cachedFavorites)) {
    if (!currentFavorites[key]) {
      filteredFavorites.push(value);
    }
  }

  try {
    // fetch all data and resolve
    Promise.all(
      filteredFavorites.map((favorite) =>
        fetch(`${api.currentConditions}${favorite.key}?${api.apiKey}`)
      )
    )
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((jsons) => {
        try {
          let favorites = jsons.map((json, index) => {
            return helperFunctions.currentWeatherParser(
              json,
              filteredFavorites[index]
            );
          });

          const favoritesAsObject = {};

          favorites.forEach((fav) => {
            favoritesAsObject[fav.key] = { ...fav };
          });

          localStorage.setItem("favorites", JSON.stringify(favoritesAsObject));

          dispatch({
            type: `${GET_FAVORITES}${SUCCESS}`,
            payload: { ...favoritesAsObject },
          });

          dispatch({
            type: PAGE_LOADING_DONE,
          });
        } catch (e) {
          console.log(e);
          //TODO add error message
          dispatch({
            type: PAGE_LOADING_DONE,
          });
        }
      });
  } catch (e) {
    console.log(e);
    dispatch({
      type: PAGE_LOADING_DONE,
    });
  }
};
