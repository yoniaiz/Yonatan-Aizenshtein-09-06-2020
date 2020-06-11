import React from "react";
import { Link, useLocation } from "react-router-dom";

export default () => {
  let location = useLocation();
  const mainIsActive = location.pathname === "/";

  return (
    <header>
      <div className="logo">
        <Link to="/">HWT</Link>
      </div>
      <div className="navigation">
        <Link to="/" className={mainIsActive ? "active" : ""}>
          Home
        </Link>
        <Link to="/favorite" className={!mainIsActive ? "active" : ""}>
          Favorite
        </Link>
      </div>
      <div className="toggle">Toggle</div>
    </header>
  );
};
