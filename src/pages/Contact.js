import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/pages/Contact.css";

import Map from "../components/Map";

import mobile from "../img/Nav/mobile.svg";
import mail from "../img/Nav/envelope-regular.svg";
import clock from "../img/Nav/clock.svg";
import mapMarker from "../img/Contact/map-marker.svg";

function Contact() {
  return (
    <section id="contact" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Map />
          </div>
        </div>

        <div className="home-section">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="section-title">
                <h2 className="ser-title">Contact Info</h2>
                <hr className="botm-line" />
              </div>

              <p className="mt-5">
                <img src={mapMarker} alt="" />
                321 Awesome Street
                <br /> 
                <p className="adress2">New York, NY 17022</p>
              </p>
              <div className="space"></div>
              <p>
                <img src={mobile} alt="" />
                +1 800 123 1234
              </p>
              <div className="space"></div>
              <p>
                <img src={mail} alt="" />
                info@companyname.com
              </p>
              <div className="space"></div>
              <p>
                <img src={clock} alt="" />
                Mon-Sat 9:00-12.00
              </p>
            </div>

            <div className="col-md-8 col-sm-8">
              <div className="section-title">
                <h2 className="ser-title">
                  Having Any Query! Or Book an appointment
                </h2>
                <hr className="botm-line" />

                <form
                  action=""
                  method="post"
                  role="form"
                  className="contactForm mt-5"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control br-radius-zero"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
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
                      data-msg="Please enter a valid email"
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
                      data-msg="Please enter at least 8 chars of subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control br-radius-zero"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
