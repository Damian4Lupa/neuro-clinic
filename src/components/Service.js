import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";


import premium from '../img/Service/premium.svg'
import support1 from '../img/Service/support1.svg'
import lab1 from '../img/Service/lab1.svg'
import counseling from '../img/Service/counseling.svg'
import emergency1 from '../img/Service/emergency1.svg'
import surgery from '../img/Service/surgery.svg'

// import emergency2 from '../img/Service/emergency2.svg'
// import app from '../img/Service/app.svg'
// import lab2 from '../img/Service/lab2.svg'
// import online1 from '../img/Service/online1.svg'
// import online2 from '../img/Service/online2.svg'
// import support2 from '../img/Service/support2.svg'

function Service() {
  return (
    <section id="service" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-3 mr-4">
            <h2 class="ser-title">Our Service</h2>
            <hr class="botm-line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              cillum.
            </p>
          </div>

          <div class="col-4">
            <div class="service-info">
              <div class="icon">
                <img src={support1} alt="" />
              </div>
              <div class="icon-info">
                <h4>24 Hour Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={emergency1} alt="" />
              </div>
              <div class="icon-info">
                <h4>Emergency Services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={lab1} alt="" />
              </div>
              <div class="icon-info">
                <h4>Medical Lab</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="service-info">
              <div class="icon">
              <img src={counseling} alt="" />
              </div>
              <div class="icon-info">
                <h4>Medical Counseling</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={surgery} alt="" />
              </div>
              <div class="icon-info">
                <h4>Surgery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={premium} alt="" />
              </div>
              <div class="icon-info">
                <h4>Premium Healthcare</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
