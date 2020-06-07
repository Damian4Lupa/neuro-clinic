import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/Footer.css";

import facebook from "../img/Footer/facebook.svg";
import twitter from "../img/Footer/twitter.svg";
import pinterest from "../img/Footer/pinterest.svg";
import linkedin from "../img/Footer/linkedin.svg";
import youTube from "../img/Footer/youtube.svg";

function Footer() {
  return (
   
      <footer class="section" id="footer">
        {/* <div class="overlay footer-overlay"></div> */}

        <div class="container">
          <div class="row justify-content-start">
            <div class="col-lg-4 col-sm-12">
              <div class="footer-widget">
                <a href="#" class="footer-brand text-white">
                  NeuroClinic
                </a>
                <p>
                  Each theme featured at the Bootstrap marketplace has been
                  reviewed by Bootstrap's creators.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div class="col-lg-3 ml-lg-auto col-sm-12">
              <div class="footer-widget">
                <h3>Account</h3>

                <ul class="footer-links ">
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

            <div class="col-lg-2 col-sm-6">
              <div class="footer-widget">
                <h3>About</h3>

                <ul class="footer-links ">
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Products Shop</a>
                  </li>

                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-sm-6">
              <div class="footer-widget">
                <h3>Socials</h3>

                <ul class="list-unstyled footer-links">
                  <li>
                    <a href="#">
                      <img
                        src={facebook}
                        alt=""
                        height="15"
                        class="mr-2"
                      />
                 
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img
                        src={twitter}
                        alt=""
                        height="15"
                        class="mr-2"
                      />Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img
                        src={pinterest}
                        alt=""
                        height="15"
                        class="mr-2"
                      />Pinterest
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img
                        src={linkedin}
                        alt=""
                        height="15"
                        class="mr-2"
                      />linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img
                        src={youTube}
                        alt=""
                        height="15"
                        class="mr-2"
                      />YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row text-right pt-5">
            <div class="col-lg-12">
              <p class="footer-copy ">
                &copy; Copyright <span class="current-year">NeuroClinic</span>.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
