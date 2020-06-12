import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/MeetUs.css";

function MeetUs() {
  return (
    <section id="meet-us" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col">
              
            <Link to="/Doctors">
              <button className="btn white-btn">meet our team</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/Service">
              <button className="btn white-btn">see our services</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetUs;
