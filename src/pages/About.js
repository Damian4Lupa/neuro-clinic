import React from "react";
import "../styles/GlobalStyle.css";

import Loading from "../components/Loading";

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <Loading />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
