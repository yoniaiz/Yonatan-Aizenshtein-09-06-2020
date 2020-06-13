import React, { lazy, Suspense, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { helperFunctions } from "helpers/functions";
//components
import Background from "components/Background";
//redux
import {
  getCurrentLocation,
  setAddressWithDetails,
} from "redux-store/actions";
import { useDispatch, useSelector } from "react-redux";

// Lazy
const Favorites = lazy(() => import("pages/Favorites"));
const Main = lazy(() => import("pages/Main"));

export default () => {
  const { currentLocation } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // if no current location get current location but if already exist use the same one
    if (!helperFunctions.validObjectWithKeys(currentLocation)) {
      dispatch(getCurrentLocation());
    } else {
      dispatch(setAddressWithDetails(currentLocation));
    }
  }, []);

  return (
    <Background>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/favorite" exact component={Favorites} />
          <Route path="/main/:id" exact component={Main} />
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Background>
  );
};
