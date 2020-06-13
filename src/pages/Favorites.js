import React from "react";
import ErrorBoundary from "utils/ErrorBoundary";
import Favorites from 'components/Favorites'

export default () => {
  return (
    <ErrorBoundary>
      <div data-testid="favorite-page" className="favorites-container"><Favorites/></div>
    </ErrorBoundary>
  );
};
