import { combineReducers } from "redux";

import { weatherReducer, uiReducer } from "./reducers";

// Reducers
export const rootReducer = combineReducers({
  weather: weatherReducer,
  ui: uiReducer,  
});
