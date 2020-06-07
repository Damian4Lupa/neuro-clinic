import React from "react";
import "../styles/HomePage.css";

function AboutShortInfo() {
  return (
    <section id="about" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-4 col-xs-12">
            <div class="section-title">
              <h2 class="head-title lg-line">About NeuroClinic</h2>
              <hr class="botm-line" />
              <p class="sec-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>

              <button class="btn blue-btn">Read more</button>
            </div>
          </div>
          <div class="col-md-9 col-sm-8 col-xs-12">
            <div class=" more-features-box">
              <div class="more-features-box-text">
                <div class="more-features-box-text-icon">
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                </div>
                <div class="more-features-box-text-description">
                  <h3>It's something important you want to know.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et. Ut wisi enim
                    ad minim veniam, quis nostrud.
                  </p>
                </div>
              </div>
              <div class="more-features-box-text">
                <div class="more-features-box-text-icon">
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                </div>
                <div class="more-features-box-text-description">
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
