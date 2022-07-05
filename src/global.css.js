import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
*{
 font-family: 'Roboto', sans-serif;
 margin: 0;
 padding: 0;
}

body{
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: #1B2430;
}
input, button, textarea, select {
  font: inherit;
}
`;
