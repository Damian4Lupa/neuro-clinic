import React from "react";
import { Link } from "react-router-dom";

import "../styles/GlobalStyle.css";
import "../styles/pages/HomePage.css";
import '../styles/components/Card.css'

import Card from "../components/Card";
import articles from "../data/articles";

let data = articles.map((item) => (
  <Card
    id={item.id}
    foto={item.foto}
    day={item.day}
    month={item.month}
    year={item.year}
    title={item.title}
    admission={item.admission}
    content={item.content}
    linkTo={item.linkTo}
    cardMini={true}
  />
));

// import test from "../img/test.jpg";

function NewsShortInfo() {
  return (
    <section id="newsShortInfo" className="home-section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="section-title">
              <h2 className="ser-title">The news</h2>
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

{data}

              {/* <div className="col">
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
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsShortInfo;
