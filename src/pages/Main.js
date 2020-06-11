import React from "react";
import { Redirect } from "react-router-dom";

//redux
import {
  getFiveDayForecast,
  getCurrentLocation,
  clearAutocomplete,
  setAddressWithDetails,
} from "redux-store/actions";
import { useDispatch, useSelector } from "react-redux";

//helpers
import { helperFunctions } from "helpers/functions";
//utils
import ErrorBoundary from "utils/ErrorBoundary";
// components
import SearchAddressInput from "components/SearchAddressInput";
import DisplayAddress from "components/DisplayAddress";

const { validObjectWithKeys } = helperFunctions;

export default ({ match: { params } }) => {
  const { currentLocation } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const [selectedAddress, setSelectedAddress] = React.useState({});
  let content = "main";

  React.useEffect(() => {
    // if no current location get current location but if already exist use the same one
    if (!validObjectWithKeys(currentLocation)) {
      dispatch(getCurrentLocation());
    } else {
      dispatch(setAddressWithDetails(currentLocation));
    }

    return () => {
      // on component unmount clear auto complete
      dispatch(clearAutocomplete());
    };
  }, []);

  React.useEffect(() => {
    if (validObjectWithKeys(selectedAddress) && selectedAddress.selected) {
      // when new selected address is selected from autocomplete
      dispatch(getFiveDayForecast(selectedAddress));
    }
    if (currentLocation && !validObjectWithKeys(selectedAddress)) {
      // set selected address as current location
      setSelectedAddress(currentLocation);
    }
  }, [selectedAddress, currentLocation]);

  if (params.id) {
    // when id passed in params check if valid number
    if (params.id.match(/^[0-9]+$/)) {
      content = params.id;
    } else {
      return <Redirect to="/" />;
    }
  }

  return (
    <ErrorBoundary>
      <div data-testid="main-page">
        {content}
        <SearchAddressInput
          setSelectedAddress={setSelectedAddress}
          selectedAddress={selectedAddress}
        />
        <DisplayAddress />
      </div>
    </ErrorBoundary>
  );
};
