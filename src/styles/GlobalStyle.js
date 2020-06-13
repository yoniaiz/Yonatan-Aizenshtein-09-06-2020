import { createGlobalStyle } from "styled-components";
import { device } from "constants/sizes";

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    font-size: 14px;
    overflow: hidden;
  }

  input:focus, textarea:focus, select:focus{
    outline: none;
  }

  body {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.background};
    font-family: ${(props) => props.theme.fontFamily};
    position: relative;
  }
  .pointer {
    cursor: pointer;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }

  .main-body{
    width: 100vw;
    height: calc(100vh - ${(props) => props.theme.footer}vh - ${(props) =>
  props.theme.header}vh);
    position: relative;
  }

  header {
    height: ${(props) => props.theme.header}vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;

    .nav-section-margin{
      margin-top: 1.2rem;
      margin-left: .5rem;
      margin-right: .5rem;
      width: 20%;
    }

   a{
    text-decoration: none;
    color: white;
   }

   .toggle{
    display: flex;
    justify-content: flex-end;
   }

    .navigation{
      width: 50%;
      min-width: 160px;
      max-width: 220px;
      display: flex;
      justify-content: space-between;

      a {
        opacity: 0.7;
        transition: .5s;
  
        &:hover {
          opacity: 1;
          transform: scale(1.02);
        }
      }

      a.active {
        opacity: 1;
      }
    }
  }

  footer {
    width: 100vw;
    height: ${(props) => props.theme.footer}vh;
    display: flex;
    position: relative;
    flex-direction: column;
  }
  

  .hills-container {
    width: 100vw;
    height: 65%;
    position: relative;
  }

  .select-input-container{
    width: 100vw;
    display:flex;
    justify-content: center;
    .select-input{
      width: 90%;
      max-width: 480px;
      min-width: 300px;
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .weather-animations-container{
    width: 100vw;
    height: 40%;
    position : absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      width: 80%;
      max-width: 600px;
      position : absolute;
    }
    .sun {
      top: 18%;
    }
  }

  .toggle-day-time-switch{
    img {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      margin: auto;
    }
  }

  .favorites-container{
    width: 100vw;
    height: 90vh;
    z-index: 1000;
    position: relative;
    display: flex;
    align-item: center;
    justify-content: center;
    
    .weather-card-container{
      width: 80%;
      display: grid;
      grid-template: 1fr / 1fr;
      column-gap: 3%;
      row-gap: 20px;
      max-width: 1300px;
      height: 80%;

      @media ${device.mobileM} {
        grid-template: repeat(2, 1fr) / repeat(1, 1fr);
      }

      @media ${device.tablet} {
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      }

      @media ${device.laptopL} {
        grid-template: repeat(2, 1fr) / repeat(4, 1fr);
      }
    }
  }

  

  @media ${device.mobileM} {
    html,body {
      font-size: 16px;
    }
  }

  @media ${device.tablet} {
    html,body {
      font-size: min(2.5vw, 25px);
    }
    
    header .navigation {
      max-width: 280px;
    }
  }

  @media ${device.laptopL} {
    html,body {
      font-size: min(2vw, 20px);
    }
    header .navigation {
      max-width: 330px;
    }

    .weather-animations-container .sun {
      top: -50%;
      right: 5%;
      width: 30% !important;
    }

    .weather-animations-container .moon {
      top: -50%;
      left: 5%;
      width: 30% !important;
    }
  }
  @media ${device.desktop} {
    html,body {
      font-size: min(2vw, 30px);
    }
  }
`;
