import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
  font-family: "Muli", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  margin: 0;
    box-sizing: border-box;
}
`;

export default GlobalStyle