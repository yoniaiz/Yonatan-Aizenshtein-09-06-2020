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
    margin-top: 10px;
    display:flex;
    justify-content: center;
  }

  .weather-animations-container{
    width: 100vw;
    height: 50%;
    position : absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      top: 18%;
      width: 80%;
    }

    .sun{
      position : absolute;
    }
    .moon{
      position : absolute;
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


`;
