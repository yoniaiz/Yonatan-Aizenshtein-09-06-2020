import styled from "styled-components";

export const StyledWeatherBox = styled.div`
  height: 50vh;
  width: 75vw;
  position: absolute;
  z-index: 15;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  background: rgba(0, 0, 0, 0.65);
  border-radius: 50px;
  padding: 10px;

  .weather-box-header {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    height: 10%;
    font-size: 1.5rem;
  }
  .deg-measure {
    font-size: 3rem;
    position: absolute;
    top: 5%;
    right: 50%;
    transform: translateX(50%);
  }
  .forecast-container {
    text-align: center;
    height: 70%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

    h3 {
      font-size: 2rem;
      margin: 10px auto;
      max-width: 50%;
    }

    .five-day-container {
      display: flex;
      justify-content: space-between;
      padding: 0 10%;

      .forecast {
        font-size: 2rem;
        h4 {
          margin-bottom: 10px;
          margin-top: 0;
        }
      }
    }
  }
`;
