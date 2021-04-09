import React from "react";
import ServiceDetailedInfo from "../components/ServiceDetailedInfo";
import EmergencyIntro from "../components/EmergencyIntro";

function Sercive() {
  return (
    <>
      <section id="sercive" className="home-section">
        <ServiceDetailedInfo />
      </section>
      <EmergencyIntro />
    </>
  );
}

export default Sercive;
