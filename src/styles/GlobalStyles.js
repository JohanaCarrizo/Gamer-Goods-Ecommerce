import {createGlobalStyle} from "styled-components";

export const GlobalStyles=createGlobalStyle`

    :root {
        --rojo-logo: #D72323;
        --rojo-oscuro: #AD1D1D;
        --rojo-oscuro-2: #861919;
        --rojo-oscuro-3: #551010;
        --rosa-claro: #FF6C6C;
        --rosa-muy-claro: #FFE7E7;
        --gris-oscuro: #6A6A6A;
        --gris: #C6C6C6;
        --gris-claro: #E3E3E3;
        --rojo-oscuro-3: #551010;
        --rojo-oscuro-3: #551010;
        --rojo-oscuro-3: #551010;
        --black: #000000;
        --white: #FFFFFF;
        --rojo-oscuro-3: #551010;
        --bg-gradient: background: radial-gradient(#A61B1B, #711212);
        --bg-gradient-2: background: radial-gradient(#D72323, #861919);
        --bg-gradient-3: background: radial-gradient(#D72323, #551010);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #131415;
        font-family: "Montserrat",sans-serif;
        color: white;
        overflow-x:hidden;
    }

    a {
        text-decoration: none;
        color: white;
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }
`;