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

  .full-screen-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
  }

  .main-loading-page{
    background: white;
  }

  .loading-page{
    background: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
  }
  
  .loader-container{
    display: flex;
    flex-direction: column;
    align-item: center;
    text-align: center;
    position: relative;

    .loader {
      margin: 0 auto;
      width: 80%;
    }

    .dots {
      animation-name: fadeIn;
      animation-iteration-count: infinite;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
    }

    @keyframes fadeIn {
      0% {opacity: 0}
      50% {opacity: 1}
      100% {opacity: 0}
    }

    h1{
      margin:0;
      font-size: 2rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
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
      width: 20%;

      @media ${device.mobileL}{
        margin-right: .5em;
        margin-left: .5em;
      }
    }

    .logo{
      img{
        width: 70%;
        min-width: 80px;
      }
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
      width: 80% !important;
      max-width: 600px;
      position : absolute;
    }
    .sun, .moon {
      top: 18%;
    }
    
    .cloud {
      top: 18%;
      right: 2%;
      width: 90% !important;
      z-index: 5;
      animation-name: flyIn;
      animation-iteration-count: forward;
      animation-duration: 4s;
      animation-timing-function: ease;
    }

    @keyframes flyIn {
      from{
        transform: translate(300%,-100%);
      }
      to{
        transform: translate(0,0);
      }
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

    .prev-and-next{
      display: flex;
      max-width: 300px;
      width: 70%;
      margin: 0 auto;
      justify-content: space-between;
      position: absolute;
      bottom: 4rem;
      font-weight: 500;

      button{
        background: transparent;
        border: none;
        font-size: 2.5rem;
        color: white;
        outline: none;
        cursor: pointer;

        &:disabled{
          color: rgba(225,225,225,0.7);
        }
      }

      @media ${device.laptop} {
        bottom: 6rem;
      }

      @media ${device.laptopL} {
        button {
        font-size: 2rem;
        }
        bottom: 4rem;
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

    .weather-animations-container .cloud {
        top: -60%;
        right: 7%;
        width: 30% !important;
      }
      .weather-animations-container .night-mode {
        right: 65%;
      }
      .weather-animations-container .moon {
        top: -50%;
        left: 5%;
        width: 30% !important;
      }
    }
  }
  @media ${device.desktop} {
    html,body {
      font-size: min(2vw, 30px);
    }
  }
`;
