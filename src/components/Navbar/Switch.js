import React, { Component } from "react";
import Switch from "react-switch";

import sun from "assets/images/sun.png";
import moon from "assets/images/moon.png";

//redux
import { toggleNightMode } from "redux-store/actions";
import { connect } from "react-redux";

class SwitchExample extends Component {
  state = {
    checked: false,
  };

  componentDidMount = () => {
    const { nightMode } = this.props;

    this.setState({ checked: !nightMode });
  };

  componentDidUpdate = () => {
    const { nightMode } = this.props;
    if (this.state.checked !== !nightMode)
      this.setState({ checked: !nightMode });
  };

  handleChange = () => {
    this.props.toggleNightMode();
  };

  render() {
    return (
      <Switch
        onChange={this.handleChange}
        checked={this.state.checked}
        width={65}
        height={30}
        data-testid="nightMode-toggle"
        uncheckedIcon={
          <img src={moon} style={{ width: "50%", position: "absolute" }} />
        }
        checkedIcon={<img src={sun} style={{ width: "95%" }} />}
        // onHandleColor={""}
        onColor={"#FDB86B"}
        className="toggle-day-time-switch"
      />
    );
  }
}

const mapStateToProps = ({ ui }) => {
  return {
    nightMode: ui.nightMode,
  };
};

export default connect(mapStateToProps, { toggleNightMode })(SwitchExample);
