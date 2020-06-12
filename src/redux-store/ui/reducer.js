import { NIGHT_MODE } from "./types";

const INIT = {
  loading: false,
  pageLoader: false,
  nightMode: new Date().getHours() > 18 || new Date().getHours() < 6, // detect if night
};

export const uiReducer = (state = INIT, { type, payload }) => {
  switch (type) {
    case NIGHT_MODE:
      return { ...state, nightMode: !state.nightMode };
    default:
      return { ...state };
  }
};
