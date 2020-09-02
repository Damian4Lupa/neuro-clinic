import React from "react";

import mobile from "../img/Contact/mobile.svg";
import mail from "../img/Contact/envelope-regular.svg";
import clock from "../img/Contact/clock.svg";
import mapMarker from "../img/Contact/map-marker.svg";

function ContactCard() {
  return (
    <section id="contact-card" className="col">
      <address className="card-deck">
        <div className="card">
          <img src={mapMarker} alt="map" />
          <div className="card-body">
            <h5 className="card-title">Address</h5>
            <p className="card-text">
              321 Awesome Street
              <br />
              New York, NY 17022
            </p>
          </div>
        </div>

        <div className="card">
          <img src={mobile} alt="" />
          <div className="card-body">
            <h5 className="card-title">Phone</h5>
            <p className="card-text">+1 800 123 1234</p>
          </div>
        </div>

        <div className="card">
          <img src={mail} alt="" />
          <div className="card-body">
            <h5 className="card-title">Email</h5>
            <p className="card-text">info@companyname.com</p>
          </div>
        </div>

        <div className="card">
          <img src={clock} alt="" />
          <div className="card-body">
            <h5 className="card-title">Opening hours</h5>
            <p className="card-text">Mon-Sat 9:00-12.00</p>
          </div>
        </div>
      </address>
    </section>
  );
}

export default ContactCard;
