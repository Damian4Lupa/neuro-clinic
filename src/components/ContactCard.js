import React from "react";

import mobile from "../img/Contact/mobile.svg";
import mail from "../img/Contact/envelope-regular.svg";
import clock from "../img/Contact/clock.svg";
import mapMarker from "../img/Contact/map-marker.svg";

function ContactCard() {
  return (
    <div id="contact-card" class="col">
      <div class="card-deck">
        <div class="card">
          <img src={mapMarker} alt="map" />
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
          <img src={mobile} alt="mobile" />
          <div class="card-body">
            <h5 class="card-title">Phone</h5>
            <p class="card-text">+1 800 123 1234</p>
          </div>
        </div>

        <div class="card">
          <img src={mail} alt="mail" />
          <div class="card-body">
            <h5 class="card-title">Email</h5>
            <p class="card-text">info@companyname.com</p>
          </div>
        </div>

        <div class="card">
          <img src={clock} alt="clock" />
          <div class="card-body">
            <h5 class="card-title">Opening hours</h5>
            <p class="card-text">Mon-Sat 9:00-12.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
