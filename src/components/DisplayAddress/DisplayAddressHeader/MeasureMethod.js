import React from "react";

export default ({ setMeasurement, measurement }) => {
  const handleChange = () => {
    setMeasurement((prevMesure) => {
      if (prevMesure === "f") return "C";
      return "f";
    });
  };
  return (
    <div className="deg-measure pointer noselect" onClick={handleChange}>
      °{measurement.toUpperCase()}
    </div>
  );
};
