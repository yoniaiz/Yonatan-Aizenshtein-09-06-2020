import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { getCurrentLocation } from "redux-store/actions";
import { useDispatch } from "react-redux";
//components
import Navbar from "components/Navbar";
// Lazy
const Favorites = lazy(() => import("pages/Favorites"));
const Main = lazy(() => import("pages/Main"));

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentLocation());
  }, []);

  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/favorite" exact component={Favorites} />
          <Route path="/main/:id" exact component={Main} />
          <Route path="/" exact component={Main} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
