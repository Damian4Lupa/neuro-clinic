import React from "react";
import "../styles/Footer.css";



import facebook from "../img/icons/facebook-f-brands.svg";
import facebook2 from "../img/icons/facebook-square-brands.svg";
import twitter from "../img/icons/twitter-brands.svg";
import twitter2 from "../img/icons/twitter-square-brands.svg";
import pinterest from "../img/icons/pinterest-p-brands.svg";
import pinterest2 from "../img/icons/pinterest-square-brands.svg";
import linkedin from "../img/icons/linkedin-brands.svg";
import YouTube from "../img/icons/youtube-brands.svg";



function Footer() {
  return (
    <div>
      <footer class="section " id="footer">
        <div class="overlay footer-overlay"></div>

        <div class="container">
          <div class="row justify-content-start">
            <div class="col-lg-4 col-sm-12">
              <div class="footer-widget">
                <a href="#" class="footer-brand text-white">
                  Rapoo
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
                        src={facebook2}
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
                        src={twitter2}
                        alt=""
                        height="15"
                        class="mr-2"
                      />Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img
                        src={pinterest2}
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
                        src={YouTube}
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
                &copy; Copyright <span class="current-year">Themefisher</span>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-4 mt-5">
              <div class="wow fadeInDown" data-wow-delay="0.1s">
                <div class="widget">
                  <h5>About Medicio</h5>
                  <p>
                    Lorem ipsum dolor sit amet, ne nam purto nihil impetus, an
                    facilisi accommodare sea
                  </p>
                </div>
              </div>
              <div class="wow fadeInDown" data-wow-delay="0.1s">
                <div class="widget">
                  <h5>Information</h5>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Laboratory</a>
                    </li>
                    <li>
                      <a href="#">Medical treatment</a>
                    </li>
                    <li>
                      <a href="#">Terms & conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-5">
              <div class="wow fadeInDown" data-wow-delay="0.1s">
                <div class="widget">
                  <h5>Medicio center</h5>
                  <p>
                    Nam leo lorem, tincidunt id risus ut, ornare tincidunt
                    naqunc sit amet.
                  </p>
                  <ul>
                    <li>
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-calendar-o fa-stack-1x fa-inverse"></i>
                      </span>{" "}
                      Monday - Saturday, 8am to 10pm
                    </li>
                    <li>
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-phone fa-stack-1x fa-inverse"></i>
                      </span>{" "}
                      +62 0888 904 711
                    </li>
                    <li>
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                      </span>{" "}
                      hello@medicio.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mt-5">
              <div class="wow fadeInDown" data-wow-delay="0.1s">
                <div class="widget">
                  <h5>Our location</h5>
                  <p>
                    The Suithouse V303, Kuningan City, Jakarta Indonesia 12940
                  </p>
                </div>
              </div>
              <div class="wow fadeInDown" data-wow-delay="0.1s">
                <div class="widget">
                  <h5>Follow us</h5>
                  <ul class="company-social">
                    <li class="social-facebook">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="social-twitter">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="social-google">
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li class="social-vimeo">
                      <a href="#">
                        <i class="fa fa-vimeo-square"></i>
                      </a>
                    </li>
                    <li class="social-dribble">
                      <a href="#">
                        <i class="fa fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-6">
                <div class="wow fadeInLeft" data-wow-delay="0.1s">
                  <div class="text-left">
                    <p>&copy;Copyright - Medicio Theme. All rights reserved.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6">
                <div class="wow fadeInRight" data-wow-delay="0.1s">
                  <div class="text-right">
                    <div class="credits">
                      Designed by{" "}
                      <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default Footer;
