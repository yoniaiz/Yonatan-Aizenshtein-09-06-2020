import React from "react";
import { Redirect } from "react-router-dom";
import SearchAddressInput from "components/SearchAddressInput";

export default ({ match: { params } }) => {
  let content = "main";
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
      <SearchAddressInput />
    </div>
  );
};
