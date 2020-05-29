import React from "react";
import "../styles/HomePage.css";

import check from "../img/HomePage/check3.svg";
import notesMedical from '../img/HomePage/notes-medical.svg'
import userMd from '../img/HomePage/user-md.svg'
import fileMedical from '../img/HomePage/file-medical.svg'

// import hospitalUser from '../img/HomePage/hospital-user.svg'
// import tasks from '../img/HomePage/tasks.svg'
// import thList from '../img/HomePage/th-list.svg'
// import bookMedical from '../img/HomePage/book-medical.svg'

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
                <img src={check} alt="" class="circled" />

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
                <img src={fileMedical} alt="" class="circled" />
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
                <img src={userMd} alt="" class="circled" />
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
                <img src={notesMedical} alt="" class="circled" />

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
