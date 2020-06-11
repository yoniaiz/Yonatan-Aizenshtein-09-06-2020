import React from "react";
import { StyledHills } from "styles/StyledHills";
import { helperFunctions } from "helpers/functions";

export default () => {
  const hills = [
    helperFunctions.generateDynamicComponent("100%", "45%", "-50px", "0", 10),
    helperFunctions.generateDynamicComponent(
      "65%",
      "20%",
      "calc(42%)",
      "0",
      9
    ),
    helperFunctions.generateDynamicComponent("120%", "55%", "47%", "-20px", 11),
  ];

  return (
    <div className="hills-container">
      {hills.map((hill) => (
        <StyledHills
          height={hill.height}
          width={hill.width}
          left={hill.left}
          bottom={hill.bottom}
          zIndex={hill.zIndex}
        />
      ))}
    </div>
  );
};
