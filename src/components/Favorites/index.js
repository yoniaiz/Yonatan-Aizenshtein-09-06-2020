import React from "react";
import { helperFunctions } from "helpers/functions";

export default () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  if (!helperFunctions.validObjectWithKeys(favorites))
    return <h1>No favorite addresses added yet.</h1>;

  return Object.keys(favorites).map((address) => (
    <div>{favorites[address].name}</div>
  ));
};
