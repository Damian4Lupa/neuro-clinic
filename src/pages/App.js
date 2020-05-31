import React from "react";
import { ThemeProvider } from 'styled-components';

import "bootstrap/dist/css/bootstrap.css";
// import "../styles/Global.css";
import theme from '../styles/theme'

import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
import HomePage from "./HomePage";
import Footer from "../components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Navigation />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
