import styled from "styled-components";

export const StyledHills = styled.div`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.secondaryPurple} 0%,
    ${(props) => props.theme.mainPurple} 84%
  );
  height: calc(${(props) => props.height});
  border-radius: 50% / 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  width: calc(
    ${(props) => props.width} - ${(props) => props.theme.minWidthToSub}
  );
  z-index: ${(props) => props.zIndex};
`;
