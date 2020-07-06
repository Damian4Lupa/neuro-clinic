import React from "react";

import "../styles/components/Doctor.css";

import facebook from "../img/Footer/facebook.svg";
import twitter from "../img/Footer/twitter.svg";
import pinterest from "../img/Footer/pinterest.svg";
import linkedin from "../img/Footer/linkedin.svg";

function Doctor(props) {
  const { id, foto, name, position } = props;

  return (
    <div id={`doctor-${id}`} className="col-md-3 d-flex">
      <div className="doctor">
        <div className="member-img">
          <img src={foto} className="img-fluid" alt={`doctor-img-${id}`} />
          <div className="social">
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={pinterest} alt="pinterest" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
