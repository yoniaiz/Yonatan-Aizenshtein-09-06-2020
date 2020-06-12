import React from "react";
import { StyledHills } from "styles/StyledHills";
import { helperFunctions } from "helpers/functions";

export default () => {
  const hills = [
    helperFunctions.generateDynamicComponent("80%", "75%", "-50px", "0", 10),
    helperFunctions.generateDynamicComponent("60%", "85%", "50%", "0", 9),
    helperFunctions.generateDynamicComponent("100%", "85%", "47%", "-60px", 11),
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
