import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/MeetUs.css";

function MeetUs() {
  return (
    <section id="meet-us">
      <div className="row">
        <article className="col team">
          <Link to="/Doctors">
            <h2>meet our team</h2>
          </Link>
        </article>

        <article className="col service">
          <Link to="/Service">
            <h2>see our services</h2>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default MeetUs;
