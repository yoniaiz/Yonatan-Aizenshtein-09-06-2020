import styled from "styled-components";
import { device } from 'constants/sizes'

export const StyledWeatherCard = styled.div`
  width: 80%;
  height: 70%;
  background: white;
  align-self: center;
  border-radius: 10px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 7px 14px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 14px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 14px -2px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  font-size: 2.3rem;
  color: ${(props) => props.theme.mainBlue};
  display: flex;
  flex-direction: column;

  @media ${device.mobileM}{
    font-size: 2rem;
  }

  @media ${device.laptop}{
    font-size: 1.5rem;
  }

  .card-header {
    flex-basis: 70%;
    position: relative;

    .card-weather-animation{
      position: absolute;
      right: 0;
      top: 0;
      width: 65%;
    }
  }

  .card-footer {
    line-height: 40px;
    h3 {
      margin: 0;
    }
    span {
      font-size: 0.7em;
    }
  }
`;
