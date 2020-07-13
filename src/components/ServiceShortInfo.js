import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/ServiceShortInfo.css";

import support from "../img/Service/support.svg";
import counseling from "../img/Service/counseling.svg";
import emergency from "../img/Service/emergency.svg";
import surgery from "../img/Service/surgery.svg";

function ServiceShortInfo() {
  return (
    <section id="service-short-info" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-3 mr-4">
            <div className="section-title">
              <h2 className="ser-title">Our service</h2>
              <hr className="botm-line" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                cillum.
              </p>

              <Link to="/Service">
                <button className="btn blue-btn">Read more</button>
              </Link>
            </div>
          </div>

          <div className="col-4">
            <div className="service-info">
              <div className="icon">
                <img src={support} alt="support" />
              </div>
              <div className="icon-info">
                <h4>24 Hour Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
                <img src={emergency} alt="emergency" />
              </div>
              <div className="icon-info">
                <h4>Emergency Services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="service-info">
              <div className="icon">
                <img src={counseling} alt="counseling" />
              </div>
              <div className="icon-info">
                <h4>Medical Counseling</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
                <img src={surgery} alt="surgery" />
              </div>
              <div className="icon-info">
                <h4>Surgery</h4>
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

export default ServiceShortInfo;
