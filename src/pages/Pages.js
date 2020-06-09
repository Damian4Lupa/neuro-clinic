import React from "react";
// import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// import theme from "../styles/theme";

// import Loading from "../components/Loading";

// import Nav from "../components/Nav";
// import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";

import HomePage from "./HomePage";
import About from "./About";
import News from "./News";
import Service from "./Service";
import Doctors from "./Doctors";
import Pricing from "./Pricing";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

// const HomePage = React.lazy(() => import("./HomePage"));

function Pages() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/About" component={About} />
      <Route path="/News" component={News} />
      <Route path="/Service" component={Service} />
      <Route path="/Doctors" component={Doctors} />
      <Route path="/Pricing" component={Pricing} />
      <Route path="/Contact" component={Contact} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default Pages;
