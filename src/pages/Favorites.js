import React from "react";
import ErrorBoundary from "utils/ErrorBoundary";

export default () => {
  return (
    <ErrorBoundary>
      <div data-testid="favorite-page">Favorite</div>
    </ErrorBoundary>
  );
};
