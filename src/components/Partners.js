import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

import bma from "../img/Partners/bma.png";
import cleanMed from "../img/Partners/CleanMed.png";
import oneHealth from "../img/Partners/one-health.png";
import uniWroc from "../img/Partners/uni-wroc.png";
import unnamed from "../img/Partners/unnamed.png";

function Partners() {
  return (
    <section id="partner" class="partner-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="col-md-12">
              <h2 class="ser-title">Our partner</h2>
              <hr class="botm-line" />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row partner-position">
          <div class="col">
            <div class="partner">
              <a href="#">
                <img src={bma} alt="" height="50" />
              </a>
            </div>
            <div class="partner">
              <a href="#">
                <img src={uniWroc} alt="" height="50" />
              </a>
            </div>
            <div class="partner">
              <a href="#">
                <img src={oneHealth} alt="" height="60" />
              </a>
            </div>
            <div class="partner">
              <a href="#">
                <img src={unnamed} alt="" height="75" />
              </a>
            </div>
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
