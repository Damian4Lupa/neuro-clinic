import React from "react";
import "../styles/HomePage.css";

import doctor from "../img/HomePage/img-3.png";
import check from "../img/HomePage/check3.svg";

function Intro() {
  return (
    <section id="intro" class="intro">
      <div class="intro-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div
                // class="wow fadeInDown"
                // data-wow-offset="0"
                // data-wow-delay="0.1s"
              >
                <h2 class="h-ultra">Medicio medical group</h2>
              </div>
              <div
                // class="wow fadeInUp"
                // data-wow-offset="0"
                // data-wow-delay="0.1s"
              >
                <h4 class="h-light">Provide best quality healthcare for you</h4>
              </div>
              <div class="well well-trans">
                <div 
                // class="wow fadeInRight" data-wow-delay="0.1s"
                >
                  <ul class="lead-list">
                    <li>
                      <img src={check} alt="" height="30" />

                      <span class="list">
                        <strong>Affordable monthly premium packages</strong>
                        <br />
                        Lorem ipsum dolor sit amet, in verterem persecuti vix,
                        sit te meis
                      </span>
                    </li>
                    <li>
                      <img src={check} alt="" height="30" />
                      <span class="list">
                        <strong>Choose your favourite doctor</strong>
                        <br />
                        Lorem ipsum dolor sit amet, in verterem persecuti vix,
                        sit te meis
                      </span>
                    </li>
                    <li>
                      <img src={check} alt="" height="30" />
                      <span class="list">
                        <strong>Only use friendly environment</strong>
                        <br />
                        Lorem ipsum dolor sit amet, in verterem persecuti vix,
                        sit te meis
                      </span>
                    </li>
                  </ul>
                  <p class="text-right wow bounceIn" data-wow-delay="0.4s">
                    <button type="button" class="btn btn-dark mb-4 mr-4">
                      Learn more
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="doctor wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <img src={doctor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro
