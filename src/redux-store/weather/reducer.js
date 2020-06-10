import { SUCCESS } from "constants/index";
import { CURRENT_LOCATION } from "./types";

const INIT = {
  favorite: [],
  currentLocation: {},
};

export const weatherReducer = (state = INIT, { type, payload }) => {
  switch (type) {
    case `${CURRENT_LOCATION}${SUCCESS}`:
      return {
        ...state,
        currentLocation: { ...payload },
      };
    default:
      return { ...state };
  }
};
