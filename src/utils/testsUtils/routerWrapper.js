import React from "react";
//navigation
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "redux-store/root";
import thunk from "redux-thunk";

import { render } from "@testing-library/react";

export function renderWithRouterAndRedux(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState = {
      weather: {
        favorite: [],
        currentLocation: {},
        autocomplete: [],
        forecast: {},
        currentWeather: {},
      },
    },
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
