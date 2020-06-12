import React from "react";

import '../styles/components/AboutCard.css'

import test2 from '../img/AboutCard/11.jpg'
import test3 from '../img/AboutCard/22.jpg'

function AboutCard() {
  return (
    <section id="AboutCard" class="home-section">
      <div className="container">
        <div class="card-deck text-center">

          <div class="card">
            <img class="card-img-top" src={test3} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer" type="button">
              <span>read more</span>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={test2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Clinical tests</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer" type="button">
              <span>read more</span>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={test3} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Internship program</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer" type="button">
              <span>read more</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutCard;
