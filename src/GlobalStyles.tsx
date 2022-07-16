import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
background-color: #0f171e;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}


html {
    scroll-behavior: smooth;
    
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  background-color: #141414;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@font-face {
  font-family: "nf-icon";
  src: url("/fonts/nf-icon-v1-93.woff");
}

@font-face {
  font-family: "Netflix Sans";
  src: url("/fonts/NetflixSans_W_Rg.woff2");
}

@font-face {
  font-family: "Netflix Sans";
  src: url("/fonts/NetflixSans_W_Md.woff2");
}

ul,li{
  list-style: none;
}

`;
