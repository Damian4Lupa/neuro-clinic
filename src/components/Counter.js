import React from "react";
// import "../styles/GlobalStyle.css";
import "../styles/components/Counter.css";

import awards from "../img/Counter/awards.svg";
import departments from "../img/Counter/departments.svg";
import doctors from "../img/Counter/doctors.svg";
import research from "../img/Counter/research.svg";

function Counter() {
  return (
    <section id="counter" className="home-section">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={doctors} alt="doctors" />
              <span data-toggle="counter-up">85</span>
              <p>
                <strong>Doctors</strong> consequuntur quae qui deca rode
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={departments} alt="departments" />
              <span data-toggle="counter-up">18</span>
              <p>
                <strong>Departments</strong> adipisci atque cum quia aut numquam
                delectus
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={research} alt="research" />
              <span data-toggle="counter-up">8</span>
              <p>
                <strong>Research Lab</strong> aut commodi quaerat. Aliquam
                ratione
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={awards} alt="awards" />
              <span data-toggle="counter-up">150</span>
              <p>
                <strong>Awards</strong> rerum asperiores dolor molestiae
                doloribu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
