import React from "react";

import PriceTable from '../components/PriceTable'
import Boxes from '../components/Boxes'
import EmergencyIntro from '../components/EmergencyIntro'
import Equipment from '../components/Equipment'

function Pricing() {
  return (
    <section id="pricing" className="home-section-top">
      <div className="container">
         <Boxes />
        <div className="row">
          <div className="col">
            <PriceTable />
          </div>
        </div>
      </div>
      <Equipment />
      <EmergencyIntro />
    </section>
  );
}

export default Pricing;