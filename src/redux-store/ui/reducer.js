import { NIGHT_MODE } from "./types";
import { LOADING, LOADING_DONE, PAGE_LOADER } from "constants/index";

const INIT = {
  loading: false,
  pageLoader: false,
  nightMode: new Date().getHours() > 18 || new Date().getHours() < 6, // detect if night
};

export const uiReducer = (state = INIT, { type, payload }) => {
  switch (type) {
    case NIGHT_MODE:
      return { ...state, nightMode: !state.nightMode };
    case LOADING:
      return { ...state, loading: !state.pageLoader ? true: false };
    case PAGE_LOADER:
      return { ...state, pageLoader: true };
    case LOADING_DONE:
      return { ...state, loading: false, pageLoader: false };
    default:
      return { ...state };
  }
};
