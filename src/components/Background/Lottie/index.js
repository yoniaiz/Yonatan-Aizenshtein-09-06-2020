import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";
import { useSelector } from "react-redux";

export default () => {
  const { nightMode } = useSelector((state) => state.ui);

  return (
    <div className="weather-animations-container">
      {nightMode ? <Moon /> : <Sun />}
    </div>
  );
};
