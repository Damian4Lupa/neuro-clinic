import React from "react";
import "../styles/GlobalStyle.css";

import "../styles/pages/News.css";
import "../styles/components/Card.css";

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
  />
));

function News() {
  
  return (
    <section id="news" className="home-section">
      <div className="container">
        <div class="row">
          {data}
        </div>
      </div>
    </section>
  );
}

export default News;
