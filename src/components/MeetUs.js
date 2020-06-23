import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/MeetUs.css";

function MeetUs() {
  return (
    <section id="meet-us">
      <div className="row">
        <div className="col team">
          <Link to="/Doctors">
            <h2>meet our team</h2>
          </Link>
        </div>

        <div className="col service">
          <Link to="/Service">
            <h2>see our services</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MeetUs;
