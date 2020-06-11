import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  input:focus, textarea:focus, select:focus{
    outline: none;
  }

  body {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.background};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 20px;
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
    font-size: 1.6rem;

    div{
      margin: 25px 30px;
    }

   a{
    text-decoration: none;
    color: white;
   }

    .navigation{
      width: 240px;
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
    display:flex;
    justify-content: center;
  }
`;
