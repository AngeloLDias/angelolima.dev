import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    /* box-sizing: border-box */
  }
  body {
    
    /* background-color: ${(props) =>
      props.theme.palette.background.default}; */
    color: ${(props) => props.theme.palette.text.primary};
    /* font-family: ${(props) => props.theme.typography.fontFamily}; */
  }
  html {
    font-size: ${(props) => props.theme.typography.htmlFontSize}px;
    scroll-behavior: smooth;
  }
  #root, html, body {
    min-height: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.palette.background.paper};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.primary.main};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.palette.primary.dark};
  }

`;
export default GlobalStyles;
