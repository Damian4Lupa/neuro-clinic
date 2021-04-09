import React from "react";
import "../styles/components/AboutCard.css";
import about1 from "../img/AboutCard/about1.jpg";
import about1_300 from "../img/AboutCard/about1-300.jpg";
import about2 from "../img/AboutCard/about2.jpg";
import about2_300 from "../img/AboutCard/about2-300.jpg";
import about3 from "../img/AboutCard/about3.jpg";
import about3_300 from "../img/AboutCard/about3-300.jpg";

// import nat1 from "./img/nat-1.jpg";
// import nat1Large from "./img/nat-1-large.jpg";

// <img
// srcSet={`${nat1} 300w, ${nat1Large} 1000w`}
// sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
// alt="Photo 1"
// className="composition__photo composition__photo--p1"
// src={nat1Large}

function AboutCard() {
  return (
    <section id="about-card" className="home-section">
      <div className="container">
        <div className="card-deck text-center">
          <article className="card">
            <img className="card-img-top" src={about3} alt="card title" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer" type="button">
              <span>read more</span>
            </div>
          </article>

          <article className="card">
            <img className="card-img-top" src={about1} alt="clinical tests" />
            <div className="card-body">
              <h5 className="card-title">Clinical tests</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer" type="button">
              <span>read more</span>
            </div>
          </article>

          <article className="card">
            <img
              className="card-img-top"
              src={about2}
              alt="internship program"
            />
            <div className="card-body">
              <h5 className="card-title">Internship program</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer" type="button">
              <span>read more</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
