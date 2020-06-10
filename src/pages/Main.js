import React from "react";
import { Redirect } from "react-router-dom";
//redux
import { getFiveDayForecast } from "redux-store/actions";
import { useDispatch } from "react-redux";
// components
import SearchAddressInput from "components/SearchAddressInput";
import DisplayAddress from "components/DisplayAddress";

export default ({ match: { params } }) => {
  const [selectedAddress, setSelectedAddress] = React.useState("");
  const dispatch = useDispatch();
  let content = "main";

  React.useEffect(() => {
    if (selectedAddress) {
      dispatch(getFiveDayForecast(selectedAddress));
    }
  }, [selectedAddress]);

  if (params.id) {
    // when id passed in params check if valid number
    if (params.id.match(/^[0-9]+$/)) {
      content = params.id;
    } else {
      return <Redirect to="/" />;
    }
  }

  return (
    <div data-testid="main-page">
      {content}
      <SearchAddressInput
        setSelectedAddress={setSelectedAddress}
        selectedAddress={selectedAddress}
      />
      <DisplayAddress />
    </div>
  );
};
