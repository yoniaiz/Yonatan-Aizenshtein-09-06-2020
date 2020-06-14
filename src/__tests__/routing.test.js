import React from "react";
import "@testing-library/jest-dom/extend-expect";

// wrappers for testing redux and react-router-dom
import { renderWithRouterAndRedux } from "utils/testsUtils";
import { cleanup, fireEvent, wait } from "@testing-library/react";

//components
import App from "pages/App";

jest.mock("lottie-web");
afterEach(cleanup);

test("routing to unknown url redirected to main and then to favorites", async () => {
  const route = "/some-route";
  const { getByTestId, getByText } = renderWithRouterAndRedux(<App />, {
    route,
  });
  await wait();

  const LinkToFavorites = getByText("Favorite");

  expect(getByTestId("main-page")).toBeInTheDocument();

  fireEvent.click(LinkToFavorites);

  await wait();

  expect(getByTestId("favorite-page")).toBeInTheDocument();
});
