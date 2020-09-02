import React, { useState } from "react";
import $ from "jquery";
import CountUp from "react-countup";
import "../styles/components/Counter.css";

import awards from "../img/Counter/awards.svg";
import departments from "../img/Counter/departments.svg";
import doctors from "../img/Counter/doctors.svg";
import research from "../img/Counter/research.svg";

function Counter() {
  const [count, setCount] = useState(false);

  $(window).scroll(function () {
    let scrollValue = $(document).scrollTop();
    let counterIdTopValue = 0
    let counter = $("#counter");

    if (counter.length) {
      counterIdTopValue = counter.offset().top - 550;
    }

    if (scrollValue > counterIdTopValue) {
      setCount(true);
    } else {
      setCount(false);
    }
  });

  let doctorsCounterValue = count ? <CountUp end={20} /> : 0;
  let departmentsCounterValue = count ? <CountUp end={18} /> : 0;
  let researchCounterValue = count ? <CountUp end={8} /> : 0;
  let awardsCounterValue = count ? <CountUp end={43} /> : 0;

  return (
    <section id="counter" className="home-section">
      <div className="container">
        <div className="row no-gutters">
          <article className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={doctors} alt="doctors" />
              <span data-toggle="counter-up">{doctorsCounterValue}</span>
              <p>
                <strong>Doctors</strong> consequuntur quae qui deca rode adipisci commodi
              </p>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={departments} alt="" />
              <span data-toggle="counter-up">{departmentsCounterValue}</span>
              <p>
                <strong>Departments</strong> adipisci atque cum quia aut numquam commodi
                delectus
              </p>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={research} alt="" />
              <span data-toggle="counter-up">{researchCounterValue}</span>
              <p>
                <strong>Research Lab</strong> aut commodi quaerat. Aliquam
                ratione
              </p>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 d-md-flex">
            <div className="counter-box">
              <img src={awards} alt="" />
              <span data-toggle="counter-up">{awardsCounterValue}</span>
              <p>
                <strong>Awards</strong> rerum asperiores dolor molestiae
                doloribu
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Counter;
