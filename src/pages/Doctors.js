import React from "react";
import "../styles/GlobalStyle.css";
import "../styles/pages/Doctors.css";

import test from '../img/Doctors/test2.jpg'

function Doctors() {
  return (
    <section id="doctors" className="home-section">
      <div className="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div
              class="member aos-init aos-animate"
            >
              <div class="member-img">
                <img
                  src={test}
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="">
                    <i class="icofont-twitter">i</i>
                  </a>
                  <a href="">
                    <i class="icofont-facebook">i</i>
                  </a>
                  <a href="">
                    <i class="icofont-instagram">i</i>
                  </a>
                  <a href="">
                    <i class="icofont-linkedin">i</i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Medical Officer</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div
              class="member aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member-img">
                <img
                  src={test}
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="">
                    <i class="icofont-twitter"></i>
                  </a>
                  <a href="">
                    <i class="icofont-facebook"></i>
                  </a>
                  <a href="">
                    <i class="icofont-instagram"></i>
                  </a>
                  <a href="">
                    <i class="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div
              class="member aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="member-img">
                <img
                  src={test}
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="">
                    <i class="icofont-twitter"></i>
                  </a>
                  <a href="">
                    <i class="icofont-facebook"></i>
                  </a>
                  <a href="">
                    <i class="icofont-instagram"></i>
                  </a>
                  <a href="">
                    <i class="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div
              class="member aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="member-img">
                <img
                  src={test}
                  class="img-fluid"
                  alt=""
                />
                <div class="social">
                  <a href="">
                    <i class="icofont-twitter"></i>
                  </a>
                  <a href="">
                    <i class="icofont-facebook"></i>
                  </a>
                  <a href="">
                    <i class="icofont-instagram"></i>
                  </a>
                  <a href="">
                    <i class="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
