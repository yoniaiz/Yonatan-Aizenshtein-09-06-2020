import React, { lazy, Suspense } from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
//redux
import { getCurrentLocation } from "redux-store/actions";
import { useDispatch, useSelector } from "react-redux";
//utils
import LoadingPage from "utils/LoadingPage";
import Loader from "utils/Loader";
//components
import Background from "components/Background";
// Lazy
const Favorites = lazy(() => import("pages/Favorites"));
const Main = lazy(() => import("pages/Main"));

export default () => {
  const location = useLocation(),
    history = useHistory();

  const { pageLoader, loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (location.pathname.includes("main")) {
      history.push("/");
    }

    // dispatch(getCurrentLocation());
  }, []);

  return (
    <>
      {pageLoader > 0 && <LoadingPage />}
      {loading > 0 && <Loader />}
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
