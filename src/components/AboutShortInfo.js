import React from "react";
import { Link } from "react-router-dom";

import '../styles/components/AboutShortInfo.css'

function AboutShortInfo() {
  return (
    <section id="about-short-info" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="section-title">
              <h2 className="ser-title">About NeuroClinic</h2>
              <hr className="botm-line" />
              <p className="sec-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>

              <Link to="/About">
                <button className="btn blue-btn">Read more</button>
              </Link>
            </div>
          </div>

          <div className="col-md-9 col-sm-8 col-xs-12">
            <div className="features-box">
              <div className="features-box-text">
                <div className="features-box-icon">
                  {" "}
                  {/* <i className="fa fa-angle-right" aria-hidden="true"></i>{" "} */}
                </div>
                <div className="features-box-description">
                  <h3>It's something important you want to know.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et. Ut wisi enim
                    ad minim veniam, quis nostrud.
                  </p>
                </div>
              </div>
              <div className="features-box-text">
                <div className="features-box-icon">
                  {/* {" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i>{" "} */}
                </div>
                <div className="features-box-description">
                  <h3>It's something important you want to know.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et. Ut wisi enim
                    ad minim veniam, quis nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutShortInfo;
