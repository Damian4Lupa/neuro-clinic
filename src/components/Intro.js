import React from "react";
import { Link } from "react-router-dom";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

import doctor from "../img/Intro/doctor-bg.png";
import check from "../img/Intro/check.svg";

function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
              // class="wow fadeInDown"
              // data-wow-offset="0"
              // data-wow-delay="0.1s"
              >
                <h2 classNamev="h-ultra">Medicio medical group</h2>
              </div>
              <div
              // class="wow fadeInUp"
              // data-wow-offset="0"
              // data-wow-delay="0.1s"
              >
                <h4 className="h-light">
                  Provide best quality healthcare for you
                </h4>
              </div>
              <div className="well well-trans">
                <div
                // class="wow fadeInRight" data-wow-delay="0.1s"
                >
                  <ul className="lead-list">
                    <li>
                      <img src={check} alt="" height="30" />

                      <span className="list">
                        <strong>Affordable monthly premium packages</strong>
                        <br />
                        Lorem ipsum dolor sit amet, in verterem persecuti vix,
                        sit te meis
                      </span>
                    </li>
                    <li>
                      <img src={check} alt="" height="30" />
                      <span className="list">
                        <strong>Choose your favourite doctor</strong>
                        <br />
                        Lorem ipsum dolor sit amet, in verterem persecuti vix,
                        sit te meis
                      </span>
                    </li>
                    <li>
                      <img src={check} alt="" height="30" />
                      <span className="list">
                        <strong>Only use friendly environment</strong>
                        <br />
                        Lorem ipsum dolor sit amet, in verterem persecuti vix,
                        sit te meis
                      </span>
                    </li>
                  </ul>
                  <p className="text-right">
                    <Link to="/Service">
                      <button type="button" className="btn blue-btn mb-4 mr-4">
                        Learn more
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="doctor wow fadeInUp"
                // data-wow-duration="2s"
                // data-wow-delay="0.2s"
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

export default Intro;
