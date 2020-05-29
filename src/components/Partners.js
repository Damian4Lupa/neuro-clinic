import React from "react";
import "../styles/HomePage.css";

import bma from '../img/partners/bma.png'
import bma2 from '../img/partners/bma2.png'
import cleanMed from '../img/partners/CleanMed.png'
import oneHealth from '../img/partners/one-health.png'
import uniWroc from '../img/partners/uni-wroc.png'
import unnamed from '../img/partners/unnamed.png'

function Partners() {
  return (
    <section id="partner" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div 
            // class="wow lightSpeedIn" data-wow-delay="0.1s"
            >
              <div class="section-heading text-center">
                <h2 class="h-bold">Our partner</h2>
                <p>
                  Take charge of your health today with our specially designed
                  health packages
                </p>
              </div>
            </div>
            <div class="divider-short"></div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-2">
            <div class="partner bma">
              <a href="#">
                <img src={bma} alt="" height="50" />
              </a>
            </div>
          </div>
          <div class="col-4">
            <div class="partner">
              <a href="#">
              <img src={uniWroc} alt="" height="50" />
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="partner">
              <a href="#">
              <img src={oneHealth} alt="" height="60" />
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="partner">
              <a href="#">
              <img src={unnamed} alt="" height="75" />
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="partner">
              <a href="#">
              <img src={cleanMed} alt="" height="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
