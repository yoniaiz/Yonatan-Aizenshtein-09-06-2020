import React from "react";
//styled components
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
//components
import Navbar from "components/Navbar";
import Footer from "./Footer";
import Mountains from "./Mountains";
import { useWindowSize } from "utils/useWindowSize";

export default ({ children }) => {
  const size = useWindowSize();
  if (!size || !size.width) return null;

  const { width } = size;

  const theme = {
    mainBlue: "#2D4159",
    secondaryBlue: "#0677A1",
    yellow: "#FDB86B",
    mainPurple: "#59253A",
    secondaryPurple: "#895061",
    mountainPurple: "#78244C",
    black: "#000000",
    white: "#FFFFFF",
    footer: "15",
    header: "10",
    minWidthToAdd: width > 1200 ? "0%" : width > 480 ? "20%" : "40%",
    fontFamily: '"Roboto", sans-serif',
  };


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle
        background={`linear-gradient(180deg, ${theme.secondaryBlue} 20.62%, ${theme.mainBlue} 100%)`}
      />
      <Navbar />
      <div className="main-body">
        {children}
        <Mountains />
      </div>
      <Footer />
    </ThemeProvider>
  );
};
