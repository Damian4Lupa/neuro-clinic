import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
  font-family: "Ubuntu", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  margin: 0;
    box-sizing: border-box;
    /* background-color: rgba(238, 238, 238, 0.15) */
    background-color: #fff;
}
`;

export default GlobalStyle;
