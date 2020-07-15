import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Intro.css";

import doctor from "../img/Intro/doctor-bg.png";
import check from "../img/Intro/check.svg";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 slideLeft">
              <h2 className="h-ultra">NeuroClinic medical group</h2>

              <h4 className="h-light">
                Provide best quality healthcare for you
              </h4>

              <div className="box">
                <ul className="lead-list">
                  <li>
                    <img src={check} alt="check" height="30" />

                    <span className="list">
                      <strong>Affordable monthly premium packages</strong>
                      <br />
                      Lorem ipsum dolor sit amet, in verterem persecuti vix, sit
                      te meis
                    </span>
                  </li>
                  <li>
                    <img src={check} alt="check" height="30" />
                    <span className="list">
                      <strong>Choose your favourite doctor</strong>
                      <br />
                      Lorem ipsum dolor sit amet, in verterem persecuti vix, sit
                      te meis
                    </span>
                  </li>
                  <li>
                    <img src={check} alt="check" height="30" />
                    <span className="list">
                      <strong>Only use friendly environment</strong>
                      <br />
                      Lorem ipsum dolor sit amet, in verterem persecuti vix, sit
                      te meis
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
            <div className="col-lg-6">
              <div className="doctor-bg slideRight">
                <img src={doctor} alt="doctor bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
