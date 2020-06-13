import React from "react";
import { helperFunctions } from "helpers/functions";
import { showNotification } from "utils/toastNotifications";
import Card from "./Card";

export default () => {
  const [display, setDisplay] = React.useState(null);

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    if (!helperFunctions.validObjectWithKeys(favorites)) {
      showNotification("You did not choose any favorite addresses");
    } else {
      const cards = (
        <div className="weather-card-container">
          {Object.keys(favorites).map((address) => (
            <Card address={favorites[address]} />
          ))}
        </div>
      );

      setDisplay(cards);
    }
  }, []);

  return display;
};
