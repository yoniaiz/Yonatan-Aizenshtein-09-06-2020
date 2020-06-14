import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, wait } from "@testing-library/react";

// wrappers for testing redux and react-router-dom
import { renderWithRouterAndRedux } from "utils/testsUtils";
//components
import Navbar from "components/Navbar";

jest.mock("lottie-web");

afterEach(cleanup);

test("right link sets to be active after route", async () => {
  const { getByText } = renderWithRouterAndRedux(<Navbar />);

  const homeBtn = getByText("Home");
  const favoriteBtn = getByText("Favorite");

  expect(homeBtn.classList.contains("active")).toBe(true);
  expect(favoriteBtn.classList.contains("active")).toBe(false);

  fireEvent.click(favoriteBtn);

  await wait();

  expect(homeBtn.classList.contains("active")).toBe(false);
  expect(favoriteBtn.classList.contains("active")).toBe(true);
});
