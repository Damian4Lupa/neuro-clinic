import React from "react";
import "../styles/HomePage.css";

import checkmark from '../img/HomePage/checkmark.png'
import databaseSearch from '../img/HomePage/database-search.png'
import prognosis from '../img/HomePage/prognosis.png'
import stethoscope from '../img/HomePage/stethoscope.png'

function Boxes() {
  return (
    <section id="boxes" class="boxes home-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-3">
            <div 
            // class="wow fadeInUp" data-wow-delay="0.2s"
            >
              <div class="text-center">
                <img src={checkmark} alt="" class="circled" />

                <h4 class="h-bold">Make an appoinment</h4>
                <p>
                  Lorem ipsum dolor sit amet, nec te mollis utroque honestatis,
                  ut utamur molestiae vix, graecis eligendi ne.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3">
            <div 
            // class="wow fadeInUp" data-wow-delay="0.2s"
            >
              <div class="box text-center">
                <img src={databaseSearch} alt="" class="circled" />
                <h4 class="h-bold">Choose your package</h4>
                <p>
                  Lorem ipsum dolor sit amet, nec te mollis utroque honestatis,
                  ut utamur molestiae vix, graecis eligendi ne.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3">
            <div 
            // class="wow fadeInUp" data-wow-delay="0.2s"
            >
              <div class="box text-center">
                <img src={stethoscope} alt="" class="circled" />
                <h4 class="h-bold">Help by specialist</h4>
                <p>
                  Lorem ipsum dolor sit amet, nec te mollis utroque honestatis,
                  ut utamur molestiae vix, graecis eligendi ne.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-3">
            <div 
            // class="wow fadeInUp" data-wow-delay="0.2s"
            >
              <div class="box text-center">
                <img src={prognosis} alt="" class="circled" />

                <h4 class="h-bold">Get diagnostic report</h4>
                <p>
                  Lorem ipsum dolor sit amet, nec te mollis utroque honestatis,
                  ut utamur molestiae vix, graecis eligendi ne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boxes;
