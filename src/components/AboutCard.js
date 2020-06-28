import React from "react";

import '../styles/components/AboutCard.css'

import test2 from '../img/AboutCard/11.jpg'
import test3 from '../img/AboutCard/22.jpg'

function AboutCard() {
  return (
    <section id="about-card" className="home-section">
      <div className="container">
        <div className="card-deck text-center">

          <div className="card">
            <img className="card-img-top" src={test3} alt="Card image cap" />
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
          </div>

          <div className="card">
            <img className="card-img-top" src={test2} alt="Card image cap" />
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
          </div>

          <div className="card">
            <img className="card-img-top" src={test3} alt="Card image cap" />
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
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutCard;
