import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/pages/Contact2.css";

import Map from "../components/Map";

import mobile from "../img/Nav/mobile.svg";
import mail from "../img/Nav/envelope-regular.svg";
import clock from "../img/Nav/clock.svg";
import mapMarker from "../img/Contact/map-marker.svg";

function Contact2() {
  return (
    <section id="contact" className="">
      <div className="container">
        <div className="home-section">
          <div className="row">
            <div className="col-6">
              <Map />
            </div>

            <div className="col-6">
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control br-radius-zero"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    // data-msg="Please enter at least 4 chars"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control br-radius-zero"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    // data-msg="Please enter a valid email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control br-radius-zero"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    // data-msg="Please enter at least 8 chars of subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control br-radius-zero"
                    name="message"
                    rows="7"
                    data-rule="required"
                    // data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="form-action">
                  <button className="btn blue-btn float-right">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="home-section">
            <div class="col text-center">
              <div class="card-deck">
                <div class="card">
                  <img src={mapMarker} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Address</h5>
                    <p class="card-text">
                      321 Awesome Street
                      <br />
                      New York, NY 17022
                    </p>
                  </div>
                </div>

                <div class="card">
                  <img src={mobile} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Phone</h5>
                    <p class="card-text">+1 800 123 1234</p>
                  </div>
                </div>

                <div class="card">
                  <img src={mail} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Email</h5>
                    <p class="card-text">info@companyname.com</p>
                  </div>
                </div>

                <div class="card">
                  <img src={clock} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Opening hours</h5>
                    <p class="card-text">Mon-Sat 9:00-12.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact2;
