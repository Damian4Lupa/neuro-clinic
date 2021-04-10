import React from "react";
import "../styles/components/AboutCard.css";
import about1_450 from "../img/AboutCard/about1-450.jpg";
import about1_300 from "../img/AboutCard/about1-300.jpg";
import about2_450 from "../img/AboutCard/about2-450.jpg";
import about2_300 from "../img/AboutCard/about2-300.jpg";
import about3_450 from "../img/AboutCard/about3-450.jpg";
import about3_300 from "../img/AboutCard/about3-300.jpg";

function AboutCard() {
  return (
    <section id="about-card" className="home-section">
      <div className="container">
        <div className="card-deck text-center">
          <article className="card">
            <picture>
              <source srcSet={`${about3_300} 1x`} media="(max-width: 1000px)" />
              <img
                srcSet={`${about3_450} 2x`}
                className="card-img-top"
                alt=""
              />
            </picture>
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
            <picture>
              <source srcSet={`${about1_300} 1x`} media="(max-width: 1000px)" />
              <img
                srcSet={`${about1_450} 2x`}
                className="card-img-top"
                alt=""
              />
            </picture>
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
            <picture>
              <source srcSet={`${about2_300} 1x`} media="(max-width: 1000px)" />
              <img
                srcSet={`${about2_450} 2x`}
                className="card-img-top"
                alt=""
              />
            </picture>
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
