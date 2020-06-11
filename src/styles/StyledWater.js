import styled from "styled-components";

export const StyledWater = styled.div`
  width: 100vw;
  height: 35%;
  z-index: 10;
  background: linear-gradient(
      90deg,
      ${(props) => props.theme.mainBlue} 0%,
      ${(props) => props.theme.secondaryBlue} 100%
    ),
    ${(props) => props.theme.mainBlue};
`;
