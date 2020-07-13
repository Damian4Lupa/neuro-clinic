import React from "react";
import "../styles/components/Boxes.css";

import checkmark from "../img/Boxes/checkmark.png";
import databaseSearch from "../img/Boxes/database-search.png";
import prognosis from "../img/Boxes/prognosis.png";
import stethoscope from "../img/Boxes/stethoscope.png";

function Boxes() {
  return (
    <section id="boxes" className="home-section-top">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3">
            <div className="text-center">
              <img src={checkmark} alt="checkmark" className="circled" />

              <h4 className="h-bold">Make an appoinment</h4>
              <p>
                Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut
                utamur molestiae vix, graecis eligendi ne.
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="box text-center">
              <img src={databaseSearch} alt="databaseSearch" className="circled" />
              <h4 className="h-bold">Choose your package</h4>
              <p>
                Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut
                utamur molestiae vix, graecis eligendi ne.
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="box text-center">
              <img src={stethoscope} alt="stethoscope" className="circled" />
              <h4 className="h-bold">Help by specialist</h4>
              <p>
                Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut
                utamur molestiae vix, graecis eligendi ne.
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="box text-center">
              <img src={prognosis} alt="prognosis" className="circled" />

              <h4 className="h-bold">Get diagnostic report</h4>
              <p>
                Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut
                utamur molestiae vix, graecis eligendi ne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boxes;
