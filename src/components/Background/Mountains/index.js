import React from "react";
import { ThemeContext } from "styled-components";

import { StyledMountains } from "styles/StyledMountain";
import { helperFunctions } from "helpers/functions";

export default () => {
  const [mountains, setMountains] = React.useState([]);

  const snowHeight = 25;
  const generateSnow = () => `${snowHeight + Math.floor(Math.random() * 10)}%`;

  const { width } = React.useContext(ThemeContext);
  if (!width) return null;

  React.useEffect(() => {
    let regularMountains = [
      helperFunctions.generateDynamicComponent(
        "30%",
        "85%",
        "-130px",
        `-7vh`,
        1
      ),
      helperFunctions.generateDynamicComponent("50%", "90%", "10%", `-7vh`, 3),
      helperFunctions.generateDynamicComponent(
        "50%",
        "80%",
        "55%",
        `-8vh`,
        2
      ),
    ];

    if (width > 767) {
      let addMountains = [
        helperFunctions.generateDynamicComponent(
          "20%",
          "75%",
          "70%",
          `-7vh`,
          8
        ),
      ];

      if (width > 1200) {
        addMountains.push(
          helperFunctions.generateDynamicComponent(
            "50%",
            "70%",
            "-15%",
            `-7vh`,
            8
          )
        );
      }
      regularMountains = [...regularMountains, ...addMountains];
    }

    const backgroundMountains = [];

    regularMountains.forEach((mount, index) => {
      backgroundMountains[index] = {
        ...mount,
        height: `${parseInt(mount.height) + 20}%`,
        width: `${parseInt(mount.width) + 8}%`,
        left: `${parseInt(mount.left) - (width > 1200 ? -5 : 10)}${
          mount.left.includes("%") ? "%" : "px"
        }`,
        zIndex: 0,
        opacity: "0.9",
      };

      regularMountains[index].snowHeight = generateSnow();
    });

    setMountains([...regularMountains, ...backgroundMountains]);
  }, [width]);

  return mountains.map((mountain, index) => (
    <StyledMountains
      height={mountain.height}
      bottom={mountain.bottom}
      left={mountain.left}
      width={mountain.width}
      data-testid="mountain"
      zIndex={mountain.zIndex}
      snowHeight={mountain.snowHeight}
      opacity={mountain.opacity ? mountain.opacity : 1}
      key={index}
    >
      <div className="snow" />
    </StyledMountains>
  ));
};
