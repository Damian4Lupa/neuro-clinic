import React from "react";

import '../styles/Service.css'

import test1 from '../img/Service/10.svg'
import test2 from '../img/Service/22.svg'
import test3 from '../img/Service/55.svg'
import test4 from '../img/Service/77.svg'


function Service() {
  return (
    <section id="service" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-3 mr-4">
            <h2 class="ser-title">Our Service</h2>
            <hr class="botm-line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              cillum.
            </p>
          </div>

          <div class="col-4">
            <div class="service-info">
              <div class="icon">
                <img src={test1} alt="" />
              </div>
              <div class="icon-info">
                <h4>24 Hour Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={test2} alt="" />
              </div>
              <div class="icon-info">
                <h4>Emergency Services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={test3} alt="" />
              </div>
              <div class="icon-info">
                <h4>Medical Lab</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="service-info">
              <div class="icon">
              <img src={test4} alt="" />
              </div>
              <div class="icon-info">
                <h4>Medical Counseling</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={test4} alt="" />
              </div>
              <div class="icon-info">
                <h4>Surgery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div class="service-info">
              <div class="icon">
              <img src={test4} alt="" />
              </div>
              <div class="icon-info">
                <h4>Premium Healthcare</h4>
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

export default Service;
