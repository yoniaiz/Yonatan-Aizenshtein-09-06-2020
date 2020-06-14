import React from "react";
import { useHistory } from "react-router-dom";

//redux
import { getFiveDayForecast, clearAutocomplete } from "redux-store/actions";
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
  const history = useHistory();

  const { currentLocation, favorite, currentWeather } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  const [selectedAddress, setSelectedAddress] = React.useState({});

  React.useEffect(() => {
    if (validObjectWithKeys(selectedAddress) && selectedAddress.selected) {
      // when new selected address is selected from autocomplete
      dispatch(getFiveDayForecast(selectedAddress));
    }
    if (
      currentLocation &&
      !validObjectWithKeys(selectedAddress) &&
      !params.id
    ) {
      // set currentLocation as selected address
      setSelectedAddress(currentLocation);
    }

    if (
      params.id &&
      (!validObjectWithKeys(selectedAddress) ||
        selectedAddress.key !== params.id)
    ) {
      // when id passed in params check if valid number
      if (params.id.match(/^[0-9]+$/) && favorite[params.id]) {
        setSelectedAddress(currentWeather);
        dispatch(getFiveDayForecast(currentWeather, false));
      } else {
        history.push("/");
      }
    }
  }, [selectedAddress, currentLocation]);

  return (
    <ErrorBoundary>
      <div data-testid="main-page">
        <SearchAddressInput
          setSelectedAddress={setSelectedAddress}
          selectedAddress={selectedAddress}
        />
        <DisplayAddress />
      </div>
    </ErrorBoundary>
  );
};
