import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Luckiest-Guy';
        src: url("/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf");
    }

    body {
        background-color: whitesmoke;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }
`