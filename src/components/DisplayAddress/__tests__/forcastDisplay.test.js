import React from "react";
import { mocks } from "helpers/mocks";
import { helperFunctions } from "helpers/functions";

import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, wait } from "@testing-library/react";

// wrappers for testing redux and react-router-dom
import { renderWithRouterAndRedux } from "utils/testsUtils";
//components
import DisplayAddress from "components/DisplayAddress";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ...mocks.autocompleteRes }),
  })
);

afterEach(cleanup);

test("expect not do display forecast", async () => {
  const { queryByTestId } = renderWithRouterAndRedux(<DisplayAddress />);

  expect(queryByTestId("forecast")).toBeNull();
});

test("display 5 day forecast", async () => {
  const { getAllByTestId } = renderWithRouterAndRedux(<DisplayAddress />, {
    initialState: {
      weather: {
        favorite: [],
        currentLocation: {},
        autocomplete: [],
        forecast: {
          ...helperFunctions.forecastParser(mocks.fiveDayForecast),
        },
        currentWeather: {
          name: "new york",
          text: "sunny",
          isDayTime: true,
          celsius: 22,
          fahrenheit: 71,
        },
      },
    },
  });

  expect(getAllByTestId("forecast").length).toBe(5);
});
