import React from "react";
//styled components
import { ThemeContext } from "styled-components";
//helpers
import { helperFunctions } from "helpers/functions";
//utils
import { showNotification } from "utils/toastNotifications";
//components
import Card from "./Card";

export default () => {
  const [display, setDisplay] = React.useState(null);
  const { width } = React.useContext(ThemeContext);

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    if (!helperFunctions.validObjectWithKeys(favorites)) {
      showNotification("You did not choose any favorite addresses");
    } else {
      const cards = (
        <div className="weather-card-container">
          {Object.keys(favorites).map((address, index) => {
            if (
              (width < 375 && index > 0) ||
              (width >= 375 && width < 768 && index > 1) || 
              (width >= 768 && width < 1024 && index > 5) ||
              (width >= 1024 && index > 7)
            )
              return null;
            return <Card address={favorites[address]} />;
          })}
        </div>
      );

      setDisplay(cards);
    }
  }, [width]);

  return display;
};
