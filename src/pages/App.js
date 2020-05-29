import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Nav from "../components/Nav";
import HomePage from "./HomePage";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";

function App() {
  return (
    <div>
      <Nav />
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
