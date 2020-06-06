import React from "react";
import "../styles/News.css";
import test from "../img/test.jpg";

function NewsShortInfo() {
  return (
    <section id="news" class="section-padding">
      <div class="container mt-5">
        <div class="row">
          <div class="col-3">
            <div class="section-title">
              <h2 class="head-title lg-line">The News</h2>
              <hr class="botm-line" />
              <p class="sec-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>

              <center>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </center>
            </div>
          </div>

          <div class="col-9">
            <div class="row">
              <div class="col">
                <div class="card aaba">
                  <img class="card-img-top" src={test} alt="Card image cap" />
                  <div class="card-header">
                    <small>
                      <b>Date:</b> April 12, 2018
                      <b class="ml-2">By:</b> Dr. J. Williams
                    </small>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card aaba">
                  <img class="card-img-top" src={test} alt="Card image cap" />
                  <div class="card-header">
                    <small>
                      <b>Date:</b> April 12, 2018
                      <b class="ml-2">By:</b> Dr. J. Williams
                    </small>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card aaba">
                  <img class="card-img-top" src={test} alt="Card image cap" />
                  <div class="card-header">
                    <small>
                      <b>Date:</b> April 12, 2018
                      <b class="ml-2">By:</b> Dr. J. Williams
                    </small>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsShortInfo;
