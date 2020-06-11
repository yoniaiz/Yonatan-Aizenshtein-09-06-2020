import React from "react";
import Select from "react-select";

//redux
import { placesAutocomplete, clearAutocomplete } from "redux-store/actions";
import { useDispatch, useSelector } from "react-redux";

export default ({ selectedAddress, setSelectedAddress }) => {
  const [inputVal, setInputVal] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const dispatch = useDispatch();
  const { autocomplete } = useSelector((state) => state.weather);

  React.useEffect(() => {
    if (inputVal) {
      dispatch(placesAutocomplete(inputVal));
    }
  }, [inputVal]);

  React.useEffect(() => {
    if (autocomplete && autocomplete.length > 0) {
      const selectOptions = autocomplete.map((address) => ({
        label: `${address.country} ${address.address}`,
        city: `${address.address}`,
        value: address.key,
      }));

      setOptions(selectOptions);
    }
  }, [autocomplete]);

  return (
    <div>
      <Select
        options={options}
        data-testid="select-input"
        inputId="select-input"
        inputValue={inputVal}
        loadingMessage="loading"
        placeholder="Select country"
        value={options.filter(
          (address) => address.value === selectedAddress.value
        )}
        onChange={(selected) => setSelectedAddress(selected)}
        onInputChange={(val) => setInputVal(val)}
      />
    </div>
  );
};
