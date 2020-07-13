import React from "react";
import { Link } from "react-router-dom";

import '../styles/components/NewsShortInfo.css'
import "../styles/components/Card.css"

import Card from "../components/Card";
import articles from "../data/articles";

const newArticles = articles.slice(0, 3)

let data = newArticles.map((item) => (
  <Card
    id={item.id}
    key={item.id}
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

function NewsShortInfo() {
  return (
    <section id="news-short-info" className="home-section">
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
            <div className="row">{data}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsShortInfo;
