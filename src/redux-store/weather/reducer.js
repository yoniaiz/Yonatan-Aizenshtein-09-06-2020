import { SUCCESS, FAILURE, CLEAR } from "constants/index";
import { CURRENT_LOCATION, AUTOCOMPLETE } from "./types";

const INIT = {
  favorite: [],
  currentLocation: {},
  autocomplete: [],
};

export const weatherReducer = (state = INIT, { type, payload }) => {
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
    
    

    default:
      return { ...state };
  }
};
