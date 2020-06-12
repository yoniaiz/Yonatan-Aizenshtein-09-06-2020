import React from "react";
import { Link, useLocation } from "react-router-dom";

import Switch from './Switch';

export default () => {
  let location = useLocation();
  const mainIsActive = location.pathname === "/";

  return (
    <header>
      <div className="logo nav-section-margin">
        <Link to="/">HWT</Link>
      </div>
      <div className="navigation nav-section-margin">
        <Link to="/" className={mainIsActive ? "active" : ""}>
          Home
        </Link>
        <Link to="/favorite" className={!mainIsActive ? "active" : ""}>
          Favorite
        </Link>
      </div>
      <div className="toggle nav-section-margin"><Switch/></div>
    </header>
  );
};
