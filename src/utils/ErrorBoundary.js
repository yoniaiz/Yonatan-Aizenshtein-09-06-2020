import React from "react";
import { Redirect } from "react-router-dom";

import { reset, getCurrentLocation } from "redux-store/actions";
import { connect } from "react-redux";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // "report to service"
    console.log(error, errorInfo);
    // reset all and start over
    this.props.reset();
    this.props.getCurrentLocation();
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to="/" />;
    }

    return this.props.children;
  }
}

export default connect(null, { reset, getCurrentLocation })(ErrorBoundary);
