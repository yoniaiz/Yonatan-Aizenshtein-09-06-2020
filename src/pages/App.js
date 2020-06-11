import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//components
import Navbar from "components/Navbar";
//utils

// Lazy
const Favorites = lazy(() => import("pages/Favorites"));
const Main = lazy(() => import("pages/Main"));

export default () => {
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
