import React, { Component } from "react";
import Switch from "react-switch";

import sun from "assets/images/sun.png";
import moon from "assets/images/moon.png";

export default class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  handleChange = (checked) => {
    this.setState({ checked });
  };

  render() {
    return (
      <Switch
        onChange={this.handleChange}
        checked={this.state.checked}
        width={60}
        height={30}
        uncheckedIcon={<img src={moon} style={{width:'55%', position:'absolute'}}/>}
        checkedIcon={<img src={sun} style={{width:'100%'}}/>}
        // onHandleColor={""}
        onColor={"#FDB86B"}
        className="toggle-day-time-switch"
      />
    );
  }
}
