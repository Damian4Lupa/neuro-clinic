import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Nav";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import Footer from "./Footer";

import Navigation2 from "./Navigation2";

function App() {
  return (
    <div>
      <Nav />
      <Navigation />
      <Navigation2 />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
