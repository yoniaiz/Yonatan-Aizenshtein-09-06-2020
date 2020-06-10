import React from "react";
import { Redirect } from "react-router-dom";

export default ({ match: { params } }) => {
  if (params.id) {
    // when id passed in params check if valid number
    if (params.id.match(/^[0-9]+$/)) {
      return <div>{params.id}</div>;
    } else {
      return <Redirect to="/" />;
    }
  }

  return <div data-testid="main-page">main</div>;
};
