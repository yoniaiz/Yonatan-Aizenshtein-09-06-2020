import React from "react";
import Select from "react-select";

export default ({
  selectedAddress,
  setSelectedAddress,
  setInputVal,
  inputVal,
  options,
}) => {
  const customStyles = {
    menu: (styles) => ({
      ...styles,
      minWidth: 300,
      maxWidth: 480,
      width: "90%",
      color: "black",
      marginLeft: "0 auto",
      fontSize: "1rem",
      backgroundColor: "rgba(225,225,225,.8)",
      zIndex: 1000,
    }),
    singleValue: (styles) => ({}),
    option: (styles, state) => ({
      ...styles,
      color: "black",
      backgroundColor:
        state.isSelected || state.isFocused
          ? "rgba(225,225,225,1)"
          : "transparent",
    }),
    control: (styles) => ({
      // none of react-select's styles are passed to <Control />
      ...styles,
      minWidth: 300,
      maxWidth: 480,
      width: "90%",
      fontSize: "1rem",
      borderRadius: "40px",
      padding: "2px 8px",
      margin: "0 auto",
      backgroundColor: "rgba(225,225,225,.8)",
      color: "black",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    indicatorsContainer: () => ({}),
    dropdownIndicator: (styles, state) => ({
      ...styles,
      color: "rgba(0,0,0,0.6)",
      ":&hover": {
        color: "rgba(0,0,0,0.8)",
      },
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      data-testid="select-input"
      inputId="select-input"
      className="select-input"
      inputValue={inputVal}
      loadingMessage="loading"
      placeholder="Select country"
      value={options.filter(
        (address) => address.value === selectedAddress.value
      )}
      onChange={(selected) =>
        setSelectedAddress({ ...selected, selected: true })
      }
      onInputChange={(val) => {
        // english letters only or white space
        if (/^$|[a-z A-Z]+$/.test(val)) setInputVal(val);
      }}
    />
  );
};
