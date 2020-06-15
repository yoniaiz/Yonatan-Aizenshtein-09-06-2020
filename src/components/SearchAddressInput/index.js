import React from "react";
import Select from "react-select";

import { styledSelectField } from "styles";
import { helperFunctions } from "helpers/functions";
//redux
import { placesAutocomplete } from "redux-store/actions";
import { useDispatch, useSelector } from "react-redux";

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
      <Select
        options={options}
        styles={styledSelectField}
        data-testid="select-input"
        inputId="select-input"
        className="select-input"
        inputValue={inputVal}
        loadingMessage="loading"
        placeholder="Select country"
        value={
          options.length > 0 &&
          helperFunctions.validObjectWithKeys(selectedAddress)
            ? options.filter(
                (address) => address.value === selectedAddress.value
              )
            : null
        }
        onChange={(selected) =>
          setSelectedAddress({ ...selected, selected: true })
        }
        onInputChange={(val) => {
          // english letters only or white space
          if (/^$|[a-z A-Z]+$/.test(val)) setInputVal(val);
        }}
      />
    </div>
  );
};
