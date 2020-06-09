import React from "react";
import "@testing-library/jest-dom/extend-expect";

import {
  renderWithRouter,
  render,
  wait,
  cleanup,
  fireEvent,
} from "utils/testsUtils";

//components
import App from "pages/App";

afterEach(cleanup);

// test utils file

test("routing to unknown url and then to favorites", async () => {
  const route = "/some-route";
  const { getByTestId, getByText } = renderWithRouter(<App />, { route });
  await wait();

  const LinkToFavorites = getByText("Favorite");

  expect(getByTestId("main-page")).toHaveTextContent("Main");

  fireEvent.click(LinkToFavorites);

  await wait();

  expect(getByTestId("favorite-page")).toHaveTextContent("Favorite");
});

test("routing to main with id", async () => {
  const id = "1";
  const route = `/main/${id}`;
  const { getByText } = renderWithRouter(<App />, { route });
  
  await wait();

  expect(getByText(id)).toBeInTheDocument();
});
