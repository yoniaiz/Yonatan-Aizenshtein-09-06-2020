import React from "react";
import { ThemeContext } from "styled-components";

import { StyledHills } from "styles/StyledHills";
import { helperFunctions } from "helpers/functions";

export default () => {
  const [hills, setHills] = React.useState([]);

  const { width } = React.useContext(ThemeContext);

  React.useEffect(() => {
    const notPhone = width > 767;

    setHills([
      helperFunctions.generateDynamicComponent("80%", "75%", "-50px", "0", 10),
      helperFunctions.generateDynamicComponent(
        "60%",
        notPhone ? "60%" : "85%",
        notPhone ? "30%" : "50%",
        "0",
        9
      ),
      helperFunctions.generateDynamicComponent(
        "100%",
        notPhone ? "100%" : "85%",
        "47%",
        notPhone ? "-30%" : "-60px",
        11
      ),
    ]);
  }, [width]);

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
