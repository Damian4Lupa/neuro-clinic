import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/GlobalStyle.css"
import '../styles/Animations2222.css'

import theme from "../styles/theme";

import Loading from "../components/Loading";

import Nav from "../components/Nav";
import Navigation from "../components/Navigation";

import HomePage from "./HomePage";
// import About from "./About";
// import News from "./News";
// import Service from "./Service";
// import Doctors from "./Doctors";
// import Pricing from "./Pricing";
// import Contact from "./Contact";
// import ErrorPage from "./ErrorPage";

// const HomePage = lazy(() => import("./HomePage"));
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
    <Router>
      <HashRouter basename={"/"}>
        <ThemeProvider theme={theme}>
          <Nav />
          <Navigation />

          <Suspense fallback={<Loading />}>
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
          </Suspense>

        </ThemeProvider>
      </HashRouter>
    </Router>
  );
}

export default App;
