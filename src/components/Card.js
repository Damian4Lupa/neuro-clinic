import React from "react";

import "../styles/components/Card.css";

const Button = (
  <button type="button" className="btn blue-btn">
    Read More
  </button>
);

function Card(props) {
  const {
    id,
    foto,
    day,
    month,
    year,
    title,
    admission,
    cardMini,
  } = props;

  return (
    <div id={`card-${id}`} className="col-md-4">
      <div className={cardMini ? "blog-entry-mini" : "blog-entry"}>
        <div className="news-img">
          <img
            src={foto}
            alt={`img-card-${id}`}
            className="card-img"
          />
          <div className="meta-date">
            <span className="day">{day}</span>
            <span className="mos">{month}</span>
            <span className="yr">{year}</span>
          </div>
        </div>

        <div className={cardMini ? "text px-1 mt-3" : "text p-4"}>
          <h3 className="heading">{title}</h3>
          <p>{admission}</p>

          {cardMini ? null : Button}
        </div>
      </div>
    </div>
  );
}

export default Card;
