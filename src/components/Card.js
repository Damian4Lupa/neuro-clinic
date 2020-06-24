import React from "react";

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
  } = props;

  return (
    <div id={id} class="col-md-4">
      <div class="blog-entry">
        <div class="news-img">
          <img src={foto} alt="" class="block-20" />
          <div class="meta-date text-center p-2">
            <span class="day">{day}</span>
            <span class="mos">{month}</span>
            <span class="yr">{year}</span>
          </div>
        </div>

        <div class="text bg-white p-4">
          <h3 class="heading">{title}</h3>
          <p>{admission}</p>

          <button type="button" className="btn blue-btn">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
