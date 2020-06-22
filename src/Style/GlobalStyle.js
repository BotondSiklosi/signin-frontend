import {createGlobalStyle} from "styled-components";
import backgroundImg from "./backgroundImg.jpg";

const GlobalStyle = createGlobalStyle`
  
    @import url("https://fonts.googleapis.com/css?family=Fira+Sans");

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html,
    body {
        background-image: url(${backgroundImg});
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Fira Sans", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
`;

export default GlobalStyle;