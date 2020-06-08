import React from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import theme from "../styles/theme";

import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import HomePage from "./HomePage";
import About from "./About";
import News from "./News";
import Service from "./Service";
import Doctors from "./Doctors";
import Pricing from './Pricing'
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Router>
      <HashRouter basename={"/"}>
        <ThemeProvider theme={theme}>

          <Nav />
          <Navigation />

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

          <Footer />

        </ThemeProvider>
      </HashRouter>
    </Router>
  );
}

export default App;
