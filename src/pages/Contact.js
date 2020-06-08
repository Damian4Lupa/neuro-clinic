import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/Contact.css";

import mobile from "../img/Nav/mobile.svg";
import mail from "../img/Nav/envelope-regular.svg";
import clock from "../img/Nav/clock.svg";
import mapMarker from '../img/Contact/map-marker.svg'

function Contact() {
  return (
    <section id="contact" claclassNamess="section-padding">
      <div className="container">
        <div className="row">


          <div className="col-md-12">
            <h2 className="ser-title">Contact us</h2>
            <hr className="botm-line" />
          </div>
          <div className="col-md-4 col-sm-4">
            <h3>Contact Info</h3>
            <div className="space"></div>
            <p>
                <img src={mapMarker} alt="" height="20" />
                321 Awesome Street
              <br /> New York, NY 17022
            </p>
            <div className="space"></div>
            <p>
            <img src={mobile} alt="" height="20"  />+1 800 123 1234
            </p>
            <div className="space"></div>
            <p>
            <img src={mail} alt="" height="20"  />
              info@companyname.com
            </p>
            <div className="space"></div>
            <p>
            <img src={clock} alt="" height="20"  />Mon-Sat 9:00-12.00
            </p>
          </div>
          <div className="col-md-8 col-sm-8 marb20">
            <div className="contact-info">
              <h3 className="cnt-ttl">Having Any Query! Or Book an appointment</h3>
              <div className="space"></div>
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" className="contactForm">
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
                  <div className="validation"></div>
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
                  <div className="validation"></div>
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
                  <div className="validation"></div>
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
                  <div className="validation"></div>
                </div>

                <div className="form-action">
                  <button type="submit" className="btn btn-form float-right">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
}

export default Contact;
