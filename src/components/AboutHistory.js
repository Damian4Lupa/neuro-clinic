import React from "react";

import history1 from "../img/About/history1.jpg";
import history2 from "../img/About/history2.jpg";
import now1 from "../img/About/now1.jpg";
import now2 from "../img/About/now2.jpg";

function AboutHistory() {
  return (
    <section id="about-history">
      <div class="row">
        <div class="col-7">
          <div className="section-title">
            <h2 className="ser-title">The beginnings...</h2>
            <hr className="botm-line" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur
            ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed
            est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem
            maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
            sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue
            finibus, luctus tortor at, ornare erat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            placeat possimus eaque ullam, earum architecto ea vitae facere,
            atque ducimus, est sit quia incidunt ut unde molestias neque fuga
            reprehenderit!
          </p>
        </div>
        <div class="col-5">
          <img class="responsive bbgg" src={history1} alt="" />
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <img class="responsive" src={history2} alt="" />
        </div>

        <div class="col-7">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur
            ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed
            est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem
            maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
            sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue
            finibus, luctus tortor at, ornare erat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            placeat possimus eaque ullam, earum architecto ea vitae facere,
            atque ducimus, est sit quia incidunt ut unde molestias neque fuga
            reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum
            nulla dictum. Ut ac ligula sapien.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-7">
          <div className="section-title">
            <h2 className="ser-title">...and now</h2>
            <hr className="botm-line" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur
            ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed
            est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem
            maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
            sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue
            finibus, luctus tortor at, ornare erat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            placeat possimus eaque ullam, earum architecto ea vitae facere,
            atque ducimus, est sit quia incidunt ut unde molestias neque fuga
            reprehenderit!
          </p>
        </div>
        <div class="col-5">
          <img class="responsive bbgg" src={now2} alt="" />
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <img class="responsive" src={now1} alt="" />
        </div>

        <div class="col-7">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur
            ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed
            est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem
            maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
            sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue
            finibus, luctus tortor at, ornare erat.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            placeat possimus eaque ullam, earum architecto ea vitae facere,
            atque ducimus, est sit quia incidunt ut unde molestias neque fuga
            reprehenderit! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum
            nulla dictum. Ut ac ligula sapien.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHistory;
