import React from "react";
import "../styles/GlobalStyle.css";

import test from "../img/test.jpg";

function News() {
  return (
    <section id="news" className="home-section">
      <div className="container">
        <div className="row">
          <div class="card-deck text-center">
            <div class="card">
              <img class="card-img-top" src={test} alt="Card image cap" />
              <div className="card-header">
                <small>
                  <b>Date:</b> April 12, 2018
                  <b className="ml-2">By:</b> Dr. J. Williams
                </small>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer" type="button">
                <span>read more</span>
              </div>
            </div>

            <div class="card">
              <img class="card-img-top" src={test} alt="Card image cap" />
              <div className="card-header">
                <small>
                  <b>Date:</b> April 12, 2018
                  <b className="ml-2">By:</b> Dr. J. Williams
                </small>
              </div>
              <div class="card-body">
                <h5 class="card-title">Clinical tests</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer" type="button">
                <span>read more</span>
              </div>
            </div>

            <div class="card">
              <img class="card-img-top" src={test} alt="Card image cap" />
              <div className="card-header">
                <small>
                  <b>Date:</b> April 12, 2018
                  <b className="ml-2">By:</b> Dr. J. Williams
                </small>
              </div>
              <div class="card-body">
                <h5 class="card-title">Internship program</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer" type="button">
                <span>read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
