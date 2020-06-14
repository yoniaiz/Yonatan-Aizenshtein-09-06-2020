import React from "react";

import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, wait } from "@testing-library/react";

// wrappers for testing redux and react-router-dom
import { renderWithRouterAndRedux } from "utils/testsUtils";
//components
import Mountains from "components/Background/Mountains";
import App from "pages/App";

jest.mock("lottie-web");

afterEach(cleanup);

test("test mountains display on mobile ", () => {
  const { queryAllByTestId } = renderWithRouterAndRedux(
    <ThemeProvider theme={{ width: 320 }}>
      <Mountains />
    </ThemeProvider>
  );

  const mountains = queryAllByTestId("mountain");
  expect(mountains.length).toBe(6);
});

test("test mountains display on tablet ", () => {
  const { queryAllByTestId } = renderWithRouterAndRedux(
    <ThemeProvider theme={{ width: 800 }}>
      <Mountains />
    </ThemeProvider>
  );

  const mountains = queryAllByTestId("mountain");
  expect(mountains.length).toBe(8);
});

test("test mountains display on laptop ", () => {
  const { queryAllByTestId } = renderWithRouterAndRedux(
    <ThemeProvider theme={{ width: 1400 }}>
      <Mountains />
    </ThemeProvider>
  );

  const mountains = queryAllByTestId("mountain");
  expect(mountains.length).toBe(10);
});

test("night mode theme switch", async () => {
  const { getByTestId } = renderWithRouterAndRedux(<App />);
  const toggleButton = getByTestId("nightMode-toggle");

  expect(getByTestId("sun")).toBeInTheDocument();

  fireEvent.click(toggleButton);

  expect(getByTestId("moon")).toBeInTheDocument();
});
