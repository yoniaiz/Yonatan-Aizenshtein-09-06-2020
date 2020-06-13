import React from "react";
import ReactTooltip from "react-tooltip";

export default ({ setMeasurement, measurement }) => {
  const handleChange = () => {
    setMeasurement((prevMesure) => {
      if (prevMesure === "f") return "c";
      return "f";
    });
  };
  const [measure1, measure2] =
    measurement === "c" ? ["celsius", "fahrenheit"] : ["fahrenheit", "celsius"];
  return (
    <div
      className="deg-measure pointer noselect"
      data-tip={`Change temperature display from ${measure1} to ${measure2}`}
      data-for="measure"
      onClick={handleChange}
    >
      <span>°{measurement.toUpperCase()}</span>
      <span className="other-deg-option">°{measure2.toUpperCase()[0]}</span>
      <ReactTooltip effect="solid" type="light" id="measure" />
    </div>
  );
};
