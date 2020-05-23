import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import Nav from "./Nav";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import Footer from "./Footer";

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
