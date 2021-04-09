import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Doctor.css";
import facebook from "../img/Footer/facebook.svg";
import twitter from "../img/Footer/twitter.svg";
import pinterest from "../img/Footer/pinterest.svg";
import linkedin from "../img/Footer/linkedin.svg";

function Doctor(props) {
  const { id, foto, name, position } = props;

  return (
    <article id={`doctor-${id}`} className="col-md-3 d-flex">
      <div className="doctor">
        <div className="member-img">
          <img src={foto} className="img-fluid" alt={`doctor-img-${id}`} />
          <div className="social">
            <Link to="#">
              <img src={twitter} alt="twitter" />
            </Link>

            <Link to="#">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="#">
              <img src={pinterest} alt="pinterest" />
            </Link>
            <Link to="#">
              <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{position}</span>
        </div>
      </div>
    </article>
  );
}

export default Doctor;
