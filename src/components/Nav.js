import React from "react";

import "../styles/Nav.css";
import logo from "../img/logo.png";
import mobile from "../img/icons/mobile.svg";
import mail from "../img/icons/envelope-regular.svg";
import clock from "../img/icons/clock.svg";

function Nav() {
  return (
    <div class="logo-bar d-none d-md-block d-lg-block bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo d-none d-lg-block">
              <a class="navbar-brand js-scroll-trigger" href="index.html">
                <img src={logo} alt="" height="45" />
                <h1>NeuroClinic</h1>
              </a>
            </div>
          </div>

          <div class="col-lg-8 justify-content-end ml-lg-auto d-flex col-12 col-md-12 justify-content-md-center">
            <div class="top-info-block d-inline-flex">
              <div class="icon-block">
                <img src={mobile} alt="" height="42" />
              </div>
              <div class="info-block">
                <h6 class="font-weight-500">+7809346657</h6>
                <p>Call Free</p>
              </div>
            </div>

            <div class="top-info-block d-inline-flex">
              <div class="icon-block">
                <img src={mail} alt="" height="42" />
              </div>
              <div class="info-block">
                <h6 class="font-weight-500">info@example.com</h6>
                <p>Email Us</p>
              </div>
            </div>
            <div class="top-info-block d-inline-flex">
              <div class="icon-block">
                <img src={clock} alt="" height="42" />
              </div>
              <div class="info-block">
                <h6 class="font-weight-500">Mon-Sat 9:00-12.00 </h6>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
