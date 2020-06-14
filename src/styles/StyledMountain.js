import styled from "styled-components";

export const StyledMountains = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.mainPurple} 40.28%,
    ${(props) => props.theme.mountainPurple} 61.35%
  );
  width: calc(
    ${(props) => props.width} - ${(props) => props.theme.minWidthToSub}
  );
  height: calc(
    ${(props) => props.height} +
      ${(props) => parseInt(props.theme.minWidthToSub) / 5}%
  );
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
  .snow {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      68% 57%,
      79% 91%,
      49% 51%,
      21% 91%,
      32% 57%,
      39% 35%
    );
    background: linear-gradient(90deg, #c4c4c4 37.94%, #ffffff 78.89%);
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: ${(props) => props.snowHeight};
  }

  animation-name: grow;
  animation-iteration-count: forward;
  animation-duration: 3s;
  animation-timing-function: ease;

  @keyframes grow {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0)
    }
  }
`;
