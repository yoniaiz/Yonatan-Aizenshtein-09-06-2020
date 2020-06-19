import { NIGHT_MODE } from "./types";
import {
  LOADING,
  LOADING_DONE,
  PAGE_LOADER,
  PAGE_LOADING_DONE,
  AUTOCOMPLETE_LOADER,
} from "constants/index";

export const UI_INIT = {
  loading: 0,
  pageLoader: 0,
  autocompleteLoader: false,
  nightMode: new Date().getHours() > 18 || new Date().getHours() < 6, // detect if night
};

export const uiReducer = (state = UI_INIT, { type, payload }) => {
  switch (type) {
    case NIGHT_MODE:
      return { ...state, nightMode: !state.nightMode };
    case LOADING:
      return { ...state, loading: !state.pageLoader ? ++state.loading : 0 };
    case PAGE_LOADER:
      return { ...state, pageLoader: ++state.pageLoader };
    case AUTOCOMPLETE_LOADER:
      return { ...state, autocompleteLoader: true };
    case LOADING_DONE:
      return {
        ...state,
        loading: state.loading > 0 ? --state.loading : 0,
        autocompleteLoader: false,
      };
    case PAGE_LOADING_DONE:
      return {
        ...state,
        pageLoader: state.pageLoader > 0 ? --state.pageLoader : 0,
      };
    default:
      return state;
  }
};
