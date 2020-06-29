import React from "react";

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
    content,
    linkTo,
    cardMini,
  } = props;

  return (
    <div id={id} className="col-md-4">
      <div className={cardMini ? "blog-entry-mini" : "blog-entry"}>
        <div className="news-img">
          <img
            src={foto}
            alt=""
            className={cardMini ? "card-img-top" : "block-20"}
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