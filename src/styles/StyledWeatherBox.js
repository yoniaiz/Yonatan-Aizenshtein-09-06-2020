import styled from "styled-components";

export const StyledWeatherBox = styled.div`
  height: 55vh;
  maxwidth: 1400px;
  width: 100%;
  position: absolute;
  z-index: 15;
  right: 50%;
  bottom: 40%;
  transform: translate(50%, 50%);
  background: rgba(0, 0, 0, 0.65);
  border-radius: 0;
  padding: 10px;

  .weather-box-header {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    height: 10%;
    font-size: 1.5rem;

    .selected-address {
      width: 33%;
      text-align: left;
    }

    .add-to-favorite-address {
      width: 33%;
      text-align: right;
      img {
        width: 60%;
      }
    }
    .deg-measure {
      width: 33%;
      text-align: center;
      font-size: 2em;
    }
  }
  .forecast-container {
    text-align: center;
    height: 70%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    font-size: 1rem;

    .daily-description {
      width: 100%;
      height: 75%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3em;

      h3 {
        margin: 0;
        width: 50%;
        min-width: 300px;
      }
    }

    .five-day-container {
      display: flex;
      height: 25%;
      justify-content: space-between;
      padding: 0 5%;
      font-size: 1.2em;
      .forecast {
        text-align:center;

        h4 {
          font-size: 1.3em;
          margin-bottom: 10px;
          margin-top: 0;
        }
      }
    }
  }
`;
