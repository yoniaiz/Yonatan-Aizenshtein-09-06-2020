import { CURRENT_LOCATION } from "./types";

import Dispatcher from "utils/classes/Dispatcher";

const dispatcher = new Dispatcher();

export const getCurrentLocation = () => async () => {
  dispatcher.action = CURRENT_LOCATION;

  dispatcher.request(true);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  try {
    function success(pos) {
      const { latitude, longitude } = pos.coords;
      dispatcher.success({ latitude, longitude });
    }

    function error(err) {
      if (err.code === 1) {
        dispatcher.failure({ message: `You denied your location share...` });
      }
    }

    if (!navigator.geolocation) {
      dispatcher.failure({
        message: "Geolocation is not supported by your browser",
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  } catch (e) {
    console.log(e);
  }

  dispatcher.loadingDone();
};
