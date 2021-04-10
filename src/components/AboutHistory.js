import React from "react";
import history1_500 from "../img/About/history1-500.jpg";
import history1_300 from "../img/About/history1-300.jpg";
import history2_500 from "../img/About/history2-500.jpg";
import history2_300 from "../img/About/history2-300.jpg";
import now1_500 from "../img/About/now1-500.jpg";
import now1_300 from "../img/About/now1-300.jpg";
import now2_500 from "../img/About/now2-500.jpg";
import now2_300 from "../img/About/now2-300.jpg";

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
          <picture>
            <source srcSet={`${history1_300} 1x`} media="(max-width: 1000px)" />
            <img
              srcSet={`${history1_500} 2x`}
              className="responsive img-right"
              alt="first operation in the clinic"
            />
          </picture>
        </div>
      </article>

      <article className="row">
        <div className="col-5">
          <picture>
            <source srcSet={`${history2_300} 1x`} media="(max-width: 1000px)" />
            <img
              srcSet={`${history2_500} 2x`}
              className="responsive img-left"
              alt="clinic founders: J. Abrams, E. Craft, D. Neddy"
            />
          </picture>
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
          <picture>
            <source srcSet={`${now2_300} 1x`} media="(max-width: 1000px)" />
            <img
              srcSet={`${now2_500} 2x`}
              className="responsive img-right-2"
              alt="Dave Graham, current medical director and chairman of the board"
            />
          </picture>
        </div>
      </article>

      <article className="row">
        <div className="col-5">
          <picture>
            <source srcSet={`${now1_300} 1x`} media="(max-width: 1000px)" />
            <img
              srcSet={`${now1_500} 2x`}
              className="responsive img-left"
              alt="Dave Graham, current Chief Medical Officer"
            />
          </picture>
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
