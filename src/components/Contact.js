import React from "react";
import "../styles/GlobalStyle.css";
import "../styles/Contact.css";

import mobile from "../img/Nav/mobile.svg";
import mail from "../img/Nav/envelope-regular.svg";
import clock from "../img/Nav/clock.svg";
import mapMarker from '../img/Contact/map-marker.svg'

function Contact() {
  return (
    <section id="contact" class="section-padding">
      <div class="container">
        <div class="row">


          <div class="col-md-12">
            <h2 class="ser-title">Contact us</h2>
            <hr class="botm-line" />
          </div>
          <div class="col-md-4 col-sm-4">
            <h3>Contact Info</h3>
            <div class="space"></div>
            <p>
                <img src={mapMarker} alt="" height="20" />
                321 Awesome Street
              <br /> New York, NY 17022
            </p>
            <div class="space"></div>
            <p>
            <img src={mobile} alt="" height="20"  />+1 800 123 1234
            </p>
            <div class="space"></div>
            <p>
            <img src={mail} alt="" height="20"  />
              info@companyname.com
            </p>
            <div class="space"></div>
            <p>
            <img src={clock} alt="" height="20"  />Mon-Sat 9:00-12.00
            </p>
          </div>
          <div class="col-md-8 col-sm-8 marb20">
            <div class="contact-info">
              <h3 class="cnt-ttl">Having Any Query! Or Book an appointment</h3>
              <div class="space"></div>
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control br-radius-zero"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control br-radius-zero"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control br-radius-zero"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control br-radius-zero"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div class="validation"></div>
                </div>

                <div class="form-action">
                  <button type="submit" class="btn btn-form float-right">
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
