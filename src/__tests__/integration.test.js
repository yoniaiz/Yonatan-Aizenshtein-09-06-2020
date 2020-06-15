import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mocks } from "helpers/mocks";

import { helperFunctions } from "helpers/functions";
// wrappers for testing redux and react-router-dom
import { renderWithRouterAndRedux } from "utils/testsUtils";
import { cleanup, fireEvent, wait } from "@testing-library/react";

//components
import App from "pages/App";

jest.mock("lottie-web");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ...mocks.currentWeather }),
  })
);

afterEach(cleanup);

test("Add Address to favorites and display on favorites page", async () => {
  const { getByTestId, getByText, queryAllByTestId } = renderWithRouterAndRedux(
    <App />,
    {
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
            key: "12345",
            isDayTime: true,
            celsius: 22,
            fahrenheit: 71,
          },
        },
      },
    }
  );
  await wait();

  const addToFavBtn = getByTestId("add-to-favorites");
  const linkToFavorites = getByText("Favorite");

  expect(JSON.parse(localStorage.getItem("favorites"))).toBe(null);

  fireEvent.click(addToFavBtn);

  expect(JSON.parse(localStorage.getItem("favorites"))).not.toBe(null);

  fireEvent.click(linkToFavorites);

  await wait();

  expect(queryAllByTestId("favorite-card").length).toBe(1);
});
