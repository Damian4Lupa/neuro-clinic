import React from "react";

import '../styles/components/Partners.css'

import bma from "../img/Partners/bma.png";
import cleanMed from "../img/Partners/CleanMed.png";
import oneHealth from "../img/Partners/one-health.png";
import uniWroc from "../img/Partners/uni-wroc.png";
import unnamed from "../img/Partners/unnamed.png";

function Partners() {
  return (
    <section id="partners" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-3">
          <div className="section-title">
              <h2 className="ser-title">Our partner</h2>
              <hr className="botm-line" />
              </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row partner-position">
          <div className="col">
            <div className="partner">
              <a href="#">
                <img src={bma} alt="bma" height="50" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={uniWroc} alt="uniWroc" height="50" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={oneHealth} alt="oneHealth" height="60" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={unnamed} alt="unnamed" height="75" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={cleanMed} alt="cleanMed" height="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
