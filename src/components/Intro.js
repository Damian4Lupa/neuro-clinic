import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Intro.css";
import doctor_400 from "../img/Intro/doctor-bg-400.png";
import doctor_800 from "../img/Intro/doctor-bg-800.png";
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

              <article className="box">
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
              </article>
            </div>
            <div className="col-lg-6">
              <div className="doctor-bg slideRight">
                <picture>
                  <source
                    srcSet={`${doctor_400} 1x`}
                    media="(max-width: 1000px)"
                  />
                  <img
                    srcSet={`${doctor_800} 2x`}
                    className="card-img-top"
                    alt=""
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
