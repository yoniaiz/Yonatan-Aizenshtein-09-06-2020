import React from "react";
//redux
import { placesAutocomplete, clearAutocomplete } from "redux-store/actions";
import { useDispatch, useSelector } from "react-redux";
import SelectField from "./SelectField";

export default ({ selectedAddress, setSelectedAddress }) => {
  const [inputVal, setInputVal] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const dispatch = useDispatch();
  const { autocomplete } = useSelector((state) => state.weather);

  React.useEffect(() => {
    if (inputVal) {
      // call autocomplete when input entered
      dispatch(placesAutocomplete(inputVal));
    }
  }, [inputVal]);

  React.useEffect(() => {
    if (autocomplete && autocomplete.length > 0) {
      // parse the autocomplete to fit the react-select component
      const selectOptions = autocomplete.map((address) => ({
        label:
          address.country && address.address
            ? `${address.country} ${address.address}`
            : address.name,
        city: address.address || address.name,
        value: address.key,
      }));

      setOptions(selectOptions);
    }
  }, [autocomplete]);

  return (
    <div className="select-input-container">
      <SelectField
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
        setInputVal={setInputVal}
        inputVal={inputVal}
        options={options}
      />
    </div>
  );
};
