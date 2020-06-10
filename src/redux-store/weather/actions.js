import { CURRENT_LOCATION, AUTOCOMPLETE } from "./types";
import { api } from "constants/index";
import { mocks } from "helpers/mocks";
import { helperFunctions } from "helpers/functions";

import Dispatcher from "helpers/classes/Dispatcher";

const dispatcher = new Dispatcher();

/**
 * get current user location
 */
export const getCurrentLocation = () => () => {
  dispatcher.action = CURRENT_LOCATION;

  dispatcher.request(true, true);

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

export const placesAutocomplete = (str) => async () => {
  dispatcher.action = AUTOCOMPLETE;

  dispatcher.request(true);

  try {
    // const response = await fetch(`${api.autocomplete}?${api.apiKey}&q=${str}`);
    const autocompletedAddresses = mocks.autocompleteRes;
    console.log(
      helperFunctions.autocompleteAddressesParser(autocompletedAddresses)
    );
    dispatcher.success();
  } catch (e) {
    dispatcher.failure({ message: "Something went wrong" });
  } finally {
    dispatcher.loadingDone();
  }
};
