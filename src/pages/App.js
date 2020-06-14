import React, { lazy, Suspense } from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";

import { helperFunctions } from "helpers/functions";
//components
import Background from "components/Background";
//redux
import { getCurrentLocation, setAddressWithDetails } from "redux-store/actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "utils/LoadingPage";

// Lazy
const Favorites = lazy(() => import("pages/Favorites"));
const Main = lazy(() => import("pages/Main"));

export default () => {
  const location = useLocation();
  const history = useHistory();

  const {
    weather: { currentLocation },
    ui: { pageLoader },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (location.pathname.includes("main")) {
      history.push("/");
    }
    // if no current location get current location but if already exist use the same one
    if (!helperFunctions.validObjectWithKeys(currentLocation)) {
      dispatch(getCurrentLocation());
    } else {
      dispatch(setAddressWithDetails(currentLocation));
    }
  }, []);

  return (
    <>
      {pageLoader && <LoadingPage />}
      <Background>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route path="/favorite" exact component={Favorites} />
            <Route path="/main/:id" exact component={Main} />
            <Route path="/" exact component={Main} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Background>
    </>
  );
};
