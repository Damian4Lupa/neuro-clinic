import React from "react";
import { Link } from "react-router-dom";

import "../styles/GlobalStyle.css";
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
              <ul className="footer-links ">
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Affiliate services</a>
                </li>
                <li>
                  <a href="#">Help and support</a>
                </li>
                <li>
                  <a href="#">Frequently Asked Question</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget">
              <h3>About</h3>

              <ul className="footer-links ">
                <li>
                  <a href="#">
                    <Link to="/About">About</Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Link to="/Service">Service</Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Link to="/Doctors">Doctors</Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Link to="/Pricing">Pricing</Link>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Link to="/Contact">Contact</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget">
              <h3>Socials</h3>

              <ul className="list-unstyled footer-links">
                <li>
                  <a href="#">
                    <img src={facebook} alt="" height="15" className="mr-2" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="" height="15" className="mr-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={pinterest} alt="" height="15" className="mr-2" />
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={linkedin} alt="" height="15" className="mr-2" />
                    linkedin
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={youTube} alt="" height="15" className="mr-2" />
                    YouTube
                  </a>
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
