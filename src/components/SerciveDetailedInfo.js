import React from "react";

import "../styles/components/SerciveDetailedInfo.css";

import support from "../img/Service/support.svg";
import counseling from "../img/Service/counseling.svg";
import emergency from "../img/Service/emergency.svg";
import surgery from "../img/Service/surgery.svg";
import premium from "../img/Service/premium.svg";
import lab from "../img/Service/lab.svg";

function SerciveDetailedInfo() {
  return (
    <section id="sercive-detailed-info" class="home-section">
      <div class="container">
        <div class="section-title">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            labore voluptates ex unde dolorem molestias repudiandae similique
            qui dolore sed. Sequi magni similique ipsum nisi? Exercitationem
            aliquam laborum voluptatum laudantium. Quos tempore a obcaecati
            libero nulla deserunt nobis quas voluptas error dolorum neque omnis
            similique animi, maiores, officia hic! Quos tenetur nesciunt,
            voluptatum ipsa aliquam eligendi sint? Neque, exercitationem
            recusandae?
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <img src={support} alt="support" />
            </div>
            <h4 class="title">24 Hour Support</h4>
            <p class="description">
              Sunt necessitatibus, odio et dolores cumque alias nulla eligendi
              quas, atque consectetur dolore harum praesentium laudantium vero,
              doloremque ratione. Corrupti quos quia ad magni ut blanditiis
              ullam est enim laboriosam.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <img src={counseling} alt="counseling" />
            </div>
            <h4 class="title">Medical Counseling</h4>
            <p class="description">
              Alias, minima! Molestiae incidunt quidem fugit deserunt nihil quis
              repudiandae natus, distinctio delectus at modi fuga tempora,
              fugiat qui repellendus ratione quasi. Repellendus illum quis
              incidunt accusamus iure eius iusto.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <img src={emergency} alt="emergency" />
            </div>
            <h4 class="title">Emergency Services</h4>
            <p class="description">
              Nobis tenetur corporis sit laboriosam accusamus necessitatibus,
              natus consectetur aliquid totam sapiente minima id blanditiis
              voluptate non dolorum fuga earum sint nemo velit a nisi iste. Nisi
              hic vitae quas?
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <img src={surgery} alt="surgery" />
            </div>
            <h4 class="title">Surgery</h4>
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              labore voluptates ex unde dolorem molestias repudiandae similique
              qui dolore sed. Sequi magni similique ipsum nisi? Exercitationem
              aliquam laborum voluptatum laudantium.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <img src={lab} alt="lab" />
            </div>
            <h4 class="title">Medical Lab</h4>
            <p class="description">
              Quos tempore a obcaecati libero nulla deserunt nobis quas voluptas
              error dolorum neque omnis similique animi, maiores, officia hic!
              Quos tenetur nesciunt, voluptatum ipsa aliquam eligendi sint?
              Neque, exercitationem recusandae?
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="icon">
              <img src={premium} alt="premium" />
            </div>
            <h4 class="title">Premium Healthcare</h4>
            <p class="description">
              Nobis tenetur corporis sit laboriosam accusamus necessitatibus,
              natus consectetur aliquid totam sapiente minima id blanditiis
              voluptate non dolorum fuga earum sint nemo velit a nisi iste. Nisi
              hic vitae quas?
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default SerciveDetailedInfo;
