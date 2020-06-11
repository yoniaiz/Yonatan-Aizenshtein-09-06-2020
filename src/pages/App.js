import React, { lazy, Suspense, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//components
import Background from "components/Background";
//utils

// Lazy
const Favorites = lazy(() => import("pages/Favorites"));
const Main = lazy(() => import("pages/Main"));

export default () => {
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
