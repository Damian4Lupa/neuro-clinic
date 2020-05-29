import React from "react";
import "../styles/HomePage.css";

function EmergencyIntro() {
  return (
    <section id="callaction" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="callaction bg-gray">
              <div class="row">
                <div class="col-md-8">
                  <div 
                //   class="wow fadeInUp" data-wow-delay="0.1s"
                  >
                    <div class="cta-text">
                      <h3>In an emergency? Need help now?</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        uisque interdum ante eget faucibus.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div 
                //   class="wow lightSpeedIn" data-wow-delay="0.1s"
                  >
                      <button type="button" class="btn btn-dark cta-btn">
                      Book an appoinment
                    </button>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencyIntro;
