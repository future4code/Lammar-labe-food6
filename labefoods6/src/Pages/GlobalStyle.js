import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    :root{
        --dark-peach: #e86e5a;
        --dark-peach-hover: rgba(232, 110, 90, 0.5);
        --greyish: #b8b8b8;
        --black: #000000;
        --white: #ffffff
    }

`