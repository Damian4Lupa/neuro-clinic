import React from "react";
import "../styles/GlobalStyle.css";
import "../styles/pages/About.css";

import AboutHistory from "../components/AboutHistory";
import MeetUs from "../components/MeetUs";
import AboutCard from "../components/AboutCard";

function About() {
  return (
    <>
      <section id="about" className="home-section">
        <div className="container">
          <AboutHistory />
        </div>
      </section>
      <MeetUs />
      <AboutCard />
    </>
  );
}

export default About;
