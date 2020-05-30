import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/Global.css";

import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
import HomePage from "./HomePage";
import Footer from "../components/Footer";

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
