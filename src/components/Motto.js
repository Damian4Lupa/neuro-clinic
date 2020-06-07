import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

function Motto() {
  return (
    <section id="motto" class="section-padding">
      <div class="container">
        <div class=" row">
          <div class="col-md-2"></div>
          <div class="text-right-md col-md-4 col-sm-4">
            <h2 class="section-title lg-line">
              « A few words
              <br /> about us »
            </h2>
          </div>
          <div class="col-md-4 col-sm-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a typek
            <p class="text-right">
              <i>— Medilap Healthcare</i>
            </p>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Motto;
