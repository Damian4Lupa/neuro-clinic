import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Footer.css";

import facebook from "../img/Footer/facebook.svg";
import twitter from "../img/Footer/twitter.svg";
import pinterest from "../img/Footer/pinterest.svg";
import linkedin from "../img/Footer/linkedin.svg";
import youTube from "../img/Footer/youtube.svg";

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-4 col-sm-12">
            <div className="footer-widget">
              <h3>NeuroClinic</h3>
              <p>
                Each theme featured at the Bootstrap marketplace has been
                reviewed by Bootstrap's creators.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="col-lg-3 ml-lg-auto col-sm-12">
            <div className="footer-widget">
              <h3>Account</h3>
              <ul className="footer-links">
                <li>
                  <Link to="#"> Terms and conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy policy </Link>
                </li>
                <li>
                  <Link to="#"> Affiliate services</Link>
                </li>
                <li>
                  <Link to="#"> Help and support</Link>
                </li>
                <li>
                  <Link to="#"> Frequently Asked Question</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget">
              <h3>About</h3>

              <ul className="footer-links">
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Service">Service</Link>
                </li>
                <li>
                  <Link to="/Doctors">Doctors</Link>
                </li>
                <li>
                  <Link to="/Pricing">Pricing</Link>
                </li>

                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget">
              <h3>Socials</h3>

              <ul className="list-unstyled footer-links">
                <li>
                  <Link to="#">
                    <img
                      src={facebook}
                      alt="facebook"
                      height="15"
                      className="mr-2"
                    />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={twitter}
                      alt="twitter"
                      height="15"
                      className="mr-2"
                    />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={pinterest}
                      alt="pinterest"
                      height="15"
                      className="mr-2"
                    />
                    Pinterest
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={linkedin}
                      alt="linkedin"
                      height="15"
                      className="mr-2"
                    />
                    linkedin
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src={youTube}
                      alt="youTube"
                      height="15"
                      className="mr-2"
                    />
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row text-right pt-5">
          <div className="col-lg-12">
            <p className="footer-copy ">
              &copy; Copyright <span className="current-year">NeuroClinic</span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
