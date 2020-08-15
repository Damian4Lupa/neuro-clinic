import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/GlobalStyle.css"
import '../styles/Animations.css'

import theme from "../styles/theme";

import Loading from "../components/Loading";

import Nav from "../components/Nav";
import Navigation from "../components/Navigation";

import HomePage from "./HomePage";

import ScrollToTopRoute from "../components/ScrollToTopRoute"

const About = lazy(() => import("./About"));
const News = lazy(() => import("./News"));
const Service = lazy(() => import("./Service"));
const Doctors = lazy(() => import("./Doctors"));
const Pricing = lazy(() => import("./Pricing"));
const Contact = lazy(() => import("./Contact"));
const ErrorPage = lazy(() => import("./ErrorPage"));

const Footer = lazy(() => import("../components/Footer"));

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <HashRouter basename={"/"}>
        <ThemeProvider theme={theme}>
          <Nav />
          <Navigation />

          <Suspense fallback={<Loading />}>
            <Switch>
              <ScrollToTopRoute exact path="/" component={HomePage} />
              <ScrollToTopRoute path="/About" component={About} />
              <ScrollToTopRoute path="/News" component={News} />
              <ScrollToTopRoute path="/Service" component={Service} />
              <ScrollToTopRoute path="/Doctors" component={Doctors} />
              <ScrollToTopRoute path="/Pricing" component={Pricing} />
              <ScrollToTopRoute path="/Contact" component={Contact} />
              <ScrollToTopRoute component={ErrorPage} />
            </Switch>
            <Footer />
          </Suspense>

        </ThemeProvider>
      </HashRouter>
    </Router>
  );
}

export default App;
