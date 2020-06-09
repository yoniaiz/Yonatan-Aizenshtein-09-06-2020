import { combineReducers } from "redux";

import { weatherReducer } from "./reducers";

// Reducers
export const rootReducer = combineReducers({
  weather: weatherReducer,
});
