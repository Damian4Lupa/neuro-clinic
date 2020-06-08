import React from "react";
import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

function EmergencyIntro() {
  return (
    <section className="emergency text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Emergency hotline</h2>
            <span>(+01) – 256 567 550</span>
            <p className="pt-3">
              We provide 24/7 customer support. Please feel free to contact us{" "}
              <br />
              for emergency case.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencyIntro;
