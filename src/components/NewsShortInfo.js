import React from "react";
import { Link } from "react-router-dom";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";
import test from "../img/test.jpg";

function NewsShortInfo() {
  return (
    <section id="news" className="section-padding">
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="section-title">
              <h2 className="head-title lg-line">The News</h2>
              <hr className="botm-line" />
              <p className="sec-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>

              <Link to="/News">
                <button className="btn blue-btn">Read more</button>
              </Link>

            </div>
          </div>

          <div className="col-9">
            <div className="row">
              <div className="col">
                <div className="card article-width">
                  <img className="card-img-top" src={test} alt="Card image cap" />
                  <div className="card-header">
                    <small>
                      <b>Date:</b> April 12, 2018
                      <b className="ml-2">By:</b> Dr. J. Williams
                    </small>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card article-width">
                  <img className="card-img-top" src={test} alt="Card image cap" />
                  <div className="card-header">
                    <small>
                      <b>Date:</b> April 12, 2018
                      <b className="ml-2">By:</b> Dr. J. Williams
                    </small>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card article-width">
                  <img className="card-img-top" src={test} alt="Card image cap" />
                  <div className="card-header">
                    <small>
                      <b>Date:</b> April 12, 2018
                      <b className="ml-2">By:</b> Dr. J. Williams
                    </small>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
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
