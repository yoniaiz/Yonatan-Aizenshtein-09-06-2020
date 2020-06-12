import {
  CURRENT_LOCATION,
  AUTOCOMPLETE,
  FIVE_DAY_FORECAST,
  CURRENT_WEATHER,
  RESET,
} from "./types";

import { api, CLEAR, SUCCESS } from "constants/index";
import { mocks } from "helpers/mocks";
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
        // const response = await fetch(
        //   `${api.getAddressByCoords}?${api.apiKey}&q=${latitude},${longitude}`
        // );

        const currentAddress = mocks.currentLocation; //await response.json();
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
        dispatch(setAddressWithDetails(telAvivForFallback));
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
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  } catch (e) {
    console.log(e);
    dispatch(setAddressWithDetails(telAvivForFallback));
  }

  dispatcher.loadingDone();
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

  dispatcher.request(true);

  try {
    // const response = await fetch(`${api.autocomplete}?${api.apiKey}&q=${str}`);
    const autocompletedAddresses = mocks.autocompleteRes; //await response.json();

    const parsedAddresses = helperFunctions.autocompleteAddressesParser(
      autocompletedAddresses
    );

    dispatcher.success(parsedAddresses);
  } catch (e) {
    dispatcher.failure({ message: "Something went wrong" });
  } finally {
    dispatcher.loadingDone();
  }
};

export const clearAutocomplete = () => ({
  type: `${AUTOCOMPLETE}${CLEAR}`,
});

export const getFiveDayForecast = (selectedAddress) => async (dispatch) => {
  dispatcher.action = FIVE_DAY_FORECAST;

  dispatcher.request(true);

  try {
    // const response = await fetch(`${api.forecasts}/${selectedAddress.value}?${api.apiKey}`);
    const forecast = mocks.fiveDayForecast; //await response.json();
    const parsedForecast = helperFunctions.forecastParser(forecast);

    dispatcher.success(parsedForecast);
    //get current weather if five day forecast was successful
    dispatch(getCurrentWeather(selectedAddress));
  } catch {
    dispatcher.failure();
  } finally {
    dispatcher.loadingDone();
  }
};

export const getCurrentWeather = (selectedAddress) => async () => {
  dispatcher.action = CURRENT_WEATHER;

  dispatcher.request(true);

  try {
    // const response = await fetch(
    //   `${api.currentConditions}/${selectedAddress.value}?${api.apiKey}`
    // );
    const currentWeather = mocks.currentWeather; // await response.json();

    const {
      WeatherText,
      IsDayTime,
      Temperature: { Imperial, Metric },
    } = currentWeather[0];

    const parsedCurrentWeather = {
      name: selectedAddress.city,
      text: WeatherText,
      isDayTime: IsDayTime,
      celsius: Metric.Value,
      fahrenheit: Imperial.Value,
      ...selectedAddress,
    };

    dispatcher.success(parsedCurrentWeather);
  } catch {
    dispatcher.failure();
  } finally {
    dispatcher.loadingDone();
  }
};
