import { SUCCESS, FAILURE, CLEAR } from "constants/index";
import {
  CURRENT_LOCATION,
  AUTOCOMPLETE,
  FIVE_DAY_FORECAST,
  CURRENT_WEATHER,
} from "./types";

export const WEATHER_INIT = {
  favorite: [],
  currentLocation: {},
  autocomplete: [],
  forecast: {},
  currentWeather: {},
};

export const weatherReducer = (state = WEATHER_INIT, { type, payload }) => {
  switch (type) {
    case `${CURRENT_LOCATION}${SUCCESS}`:
      return {
        ...state,
        currentLocation: { ...payload },
      };

    case `${AUTOCOMPLETE}${SUCCESS}`:
      return {
        ...state,
        autocomplete: [...payload],
      };

    // TODO add clear autocomplete
    case `${AUTOCOMPLETE}${FAILURE}`:
    case `${AUTOCOMPLETE}${CLEAR}`:
      return {
        ...state,
        autocomplete: [],
      };

    case `${FIVE_DAY_FORECAST}${SUCCESS}`:
      return {
        ...state,
        forecast: { ...payload },
      };

    case `${FIVE_DAY_FORECAST}${FAILURE}`:
    case `${CURRENT_WEATHER}${FAILURE}`:
      return {
        ...state,
        forecast: {},
        currentWeather: {},
      };

    case `${CURRENT_WEATHER}${SUCCESS}`:
      return {
        ...state,
        currentWeather: { ...payload },
      };

    default:
      return { ...state };
  }
};
