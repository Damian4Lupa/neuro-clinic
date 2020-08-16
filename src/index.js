import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./styles/index";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
