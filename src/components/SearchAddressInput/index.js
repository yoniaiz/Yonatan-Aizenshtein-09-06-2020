import React from "react";

//redux
import { placesAutocomplete } from "redux-store/actions";
import { useDispatch } from "react-redux";

export default () => {
  const [inputVal, setInputVal] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (inputVal) {
      dispatch(placesAutocomplete(inputVal));
    }
  }, [inputVal]);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </form>
    </div>
  );
};
