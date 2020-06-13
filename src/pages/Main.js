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
  const { currentLocation, favorite } = useSelector((state) => state.weather);

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
      // set selected address as current location
      setSelectedAddress(currentLocation);
    }

    if (
      params.id &&
      (!validObjectWithKeys(selectedAddress) ||
        selectedAddress.key !== params.id)
    ) {
      // when id passed in params check if valid number
      if (params.id.match(/^[0-9]+$/) && favorite[params.id]) {
        const address = favorite[params.id];
        setSelectedAddress(address);
        dispatch(getFiveDayForecast(address, false));
      } else {
        history.push("/");
      }
    }

    return () => {
      // on component unmount clear auto complete
      dispatch(clearAutocomplete());
    };
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
