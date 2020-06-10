import React from "react";
import { Redirect } from "react-router-dom";
//redux
import { getFiveDayForecast } from "redux-store/actions";
import { useDispatch } from "react-redux";
// components
import SearchAddressInput from "components/SearchAddressInput";

export default ({ match: { params } }) => {
  const [selectedAddressKey, setSelectedAddressKey] = React.useState("");
  const dispatch = useDispatch();
  let content = "main";

  React.useEffect(() => {
    if (selectedAddressKey) {
      dispatch(getFiveDayForecast(selectedAddressKey));
    }
  }, [selectedAddressKey]);

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
        setSelectedAddressKey={setSelectedAddressKey}
        selectedAddressKey={selectedAddressKey}
      />
    </div>
  );
};
