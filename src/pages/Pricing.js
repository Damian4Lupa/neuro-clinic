import React from "react";
import "../styles/GlobalStyle.css";
import '../styles/components/PriceTable.css'

import PriceTable from '../components/PriceTable'

function Pricing() {
  return (
    <section id="about" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Pricing</h1>
            <PriceTable />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;