import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body{
  /* height: 100%; */
}
*{
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
 font-family: 'Roboto', sans-serif;
 margin: 0;
}

body{
    line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
`;
