import React from "react";
import { useLocation } from "react-router-dom";
//styled components
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
//components
import Navbar from "components/Navbar";
import Footer from "./Footer";
import Mountains from "./Mountains";
import Lottie from "./Lottie";

import { useWindowSize } from "utils/useWindowSize";
import { useSelector } from "react-redux";

export default ({ children }) => {
  const { nightMode } = useSelector((state) => state.ui);
  const location = useLocation();

  const size = useWindowSize();
  if (!size || !size.width) return null;

  const { width } = size;

  const theme = {
    mainBlue: nightMode ? "#0677A1" : "#2D4159",
    secondaryBlue: nightMode ? "#2D4159" : "#0677A1",
    yellow: "#FDB86B",
    mainPurple: nightMode ? "#895061" : "#59253A",
    secondaryPurple: nightMode ? "#59253A" : "#895061",
    mountainPurple: "#78244C",
    black: "#000000",
    white: "#FFFFFF",
    footer: "16",
    header: "15",
    minWidthToSub: width > 1200 ? "30%" : width > 480 ? "20%" : "0%",
    width,
    fontFamily: '"Roboto", sans-serif',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle
        background={`linear-gradient(180deg, ${theme.secondaryBlue} 20.62%, ${theme.mainBlue} 100%)`}
      />
      <Navbar />
      <div className="main-body">
        {location.pathname !== "/favorite" && <Lottie nightMode={nightMode} />}
        {children}
        <Mountains />
      </div>
      <Footer />
    </ThemeProvider>
  );
};
