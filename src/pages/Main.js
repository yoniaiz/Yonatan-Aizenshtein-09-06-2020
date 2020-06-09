import React from "react";
import { Redirect } from "react-router-dom";

function allNumeric(id) {
  const numbers = /^[0-9]+$/;
  if (id.match(numbers)) {
    return true;
  }

  return false;
}

export default ({ match: { params } }) => {
  if (params.id && allNumeric(params.id)) {
    return <div>{params.id}</div>;
  } else if (params.id && !allNumeric(params.id)) {
    return <Redirect to="/" />;
  }

  return <div data-testid="main-page">{process.env.REACT_APP_API_KEY}</div>;
};
