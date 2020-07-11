import React from "react";

import SerciveDetailedInfo from "../components/SerciveDetailedInfo";
import EmergencyIntro from "../components/EmergencyIntro";

function Sercive() {
  return (
    <>
      <section id="sercive" className="home-section">
        <SerciveDetailedInfo />
      </section>
      <EmergencyIntro />
    </>
  );
}

export default Sercive;
