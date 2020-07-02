import React from "react";

import "../styles/components/Doctor.css";

import facebook from "../img/Footer/facebook.svg";
import twitter from "../img/Footer/twitter.svg";
import pinterest from "../img/Footer/pinterest.svg";
import linkedin from "../img/Footer/linkedin.svg";

function Doctor(props) {
  const { id, foto, name, position } = props;

  return (
    <div id={`doctor-${id}`} class="col-md-3 d-flex">
      <div class="doctor">
        <div class="member-img">
          <img src={foto} class="img-fluid" alt="" />
          <div class="social">
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={pinterest} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
        <div class="member-info">
          <h4>{name}</h4>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
