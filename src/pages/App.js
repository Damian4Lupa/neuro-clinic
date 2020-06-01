import React from "react";
import { ThemeProvider } from 'styled-components';

import "bootstrap/dist/css/bootstrap.css";
// import "../styles/Global.css";
import theme from '../styles/theme'

import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
import HomePage from "./HomePage";
import Contact from '../components/Contact'
import Footer from "../components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Navigation />
      <HomePage />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
