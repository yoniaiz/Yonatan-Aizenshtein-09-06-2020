import React from "react";
import { StyledMountains } from "styles/StyledMountain";
import { helperFunctions } from "helpers/functions";

export default () => {
  const snowHeight = 25;
  const generateSnow = () => `${snowHeight + Math.floor(Math.random() * 10)}%`;

  const regularMountains = [
    helperFunctions.generateDynamicComponent(
      "30%",
      "20%",
      "-80px",
      "-60px",
      1,
      { snowHeight: generateSnow() }
    ),
    helperFunctions.generateDynamicComponent("45%", "27%", "5%", "-60px", 2, {
      snowHeight: generateSnow(),
    }),
    helperFunctions.generateDynamicComponent(
      "40%",
      "30%",
      "25%",
      "-120px",
      2,
      { snowHeight: generateSnow() }
    ),
    helperFunctions.generateDynamicComponent(
      "35%",
      "32%",
      "40%",
      "-60px",
      0,
      { snowHeight: generateSnow() }
    ),
    helperFunctions.generateDynamicComponent(
      "65%",
      "36%",
      "52%",
      "-60px",
      3,
      { snowHeight: generateSnow() }
    ),
    helperFunctions.generateDynamicComponent(
      "30%",
      "18%",
      "80%",
      "-60px",
      1,
      { snowHeight: generateSnow() }
    ),
    helperFunctions.generateDynamicComponent(
      "40%",
      "25%",
      "85%",
      "-80px",
      2,
      { snowHeight: generateSnow() }
    ),
  ];

  

  return regularMountains.map((mountain) => (
    <StyledMountains
      height={mountain.height}
      bottom={mountain.bottom}
      left={mountain.left}
      width={mountain.width}
      zIndex={mountain.zIndex}
      snowHeight={mountain.snowHeight}
    >
      <div className="snow" />
    </StyledMountains>
  ));
};
