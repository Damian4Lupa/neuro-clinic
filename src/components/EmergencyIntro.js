import React from "react";
import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

function EmergencyIntro() {
  return (

      <section class="emergency  text-center">
        <div class="container">
          <div class="row">
            <div class="col">
           
                <h2>Emergency hotline</h2>
                <span>(+01) – 256 567 550</span>
                <p class="pt-3">
                  We provide 24/7 customer support. Please feel free to contact
                  us <br />
                  for emergency case.
                </p>
             
            </div>
          </div>
        </div>
      </section>
  );
}

export default EmergencyIntro;
