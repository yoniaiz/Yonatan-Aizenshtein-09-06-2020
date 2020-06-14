import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "assets/images/logo.png";
import Switch from "./Switch";

export default () => {
  let location = useLocation();
  const favoriteActive = location.pathname === "/favorite";

  return (
    <header>
      <div className="logo nav-section-margin">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="navigation nav-section-margin">
        <Link to="/" className={!favoriteActive ? "active" : ""}>
          Home
        </Link>
        <Link to="/favorite" className={favoriteActive ? "active" : ""}>
          Favorite
        </Link>
      </div>
      <div className="toggle nav-section-margin">
        <Switch />
      </div>
    </header>
  );
};
