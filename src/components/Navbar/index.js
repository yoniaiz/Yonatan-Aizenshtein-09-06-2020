import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
    </div>
  );
};
