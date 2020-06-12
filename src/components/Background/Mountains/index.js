import React from "react";
import { StyledMountains } from "styles/StyledMountain";
import { helperFunctions } from "helpers/functions";

export default () => {
  const snowHeight = 25;
  const generateSnow = () => `${snowHeight + Math.floor(Math.random() * 10)}%`;

  const regularMountains = [
    helperFunctions.generateDynamicComponent(
      "30%",
      "85%",
      "-130px",
      "-60px",
      1
    ),
    helperFunctions.generateDynamicComponent("50%", "90%", "10%", "-60px", 3),
    helperFunctions.generateDynamicComponent("50%", "80%", "55%", "-120px", 2),
  ];

  const backgroundMountains = [];

  regularMountains.forEach((mount, index) => {
    backgroundMountains[index] = {
      ...mount,
      height: `${parseInt(mount.height) + 20}%`,
      width: `${parseInt(mount.width) + 8}%`,
      left: `${parseInt(mount.left) - 10}${
        mount.left.includes("%") ? "%" : "px"
      }`,
      zIndex: 0,
      opacity: "0.9",
    };
  });

  const mountains = [...regularMountains, ...backgroundMountains];

  return mountains.map((mountain) => (
    <StyledMountains
      height={mountain.height}
      bottom={mountain.bottom}
      left={mountain.left}
      width={mountain.width}
      zIndex={mountain.zIndex}
      snowHeight={mountain.opacity ? 0 : generateSnow()}
      opacity={mountain.opacity ? mountain.opacity : 1}
    >
      <div className="snow" />
    </StyledMountains>
  ));
};
