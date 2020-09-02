import React from "react";

import history1 from "../img/About/history1.jpg";
import history2 from "../img/About/history2.jpg";
import now1 from "../img/About/now1.jpg";
import now2 from "../img/About/now2.jpg";

function AboutHistory() {
  return (
    <section id="about-history">
      <article className="row">
        <div className="col-7">
          <div className="section-title">
            <header>
            <h2 className="ser-title">The beginnings...</h2>
            </header>
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
        <div className="col-5">
          <img className="responsive img-right" src={history1} alt="first operation in the clinic" />
        </div>
      </article>

      <article className="row">
        <div className="col-5">
          <img className="responsive img-left" src={history2} alt="clinic founders: J. Abrams, E. Craft, D. Neddy" />
        </div>

        <div className="col-7">
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
      </article>

      <article className="row">
        <div className="col-7">
          <div className="section-title">
          <header>
            <h2 className="ser-title mt-4">...and now</h2>
            </header>
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
        <div className="col-5">
          <img className="responsive img-right-2" src={now2} alt="Dave Graham, current medical director and chairman of the board." />
        </div>
      </article>

      <article className="row">
        <div className="col-5">
          <img className="responsive img-left" src={now1} alt="Dave Graham, current Chief Medical Officer" />
        </div>

        <div className="col-7">
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
      </article>
    </section>
  );
}

export default AboutHistory;
