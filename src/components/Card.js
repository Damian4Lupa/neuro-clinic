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
    <div id={id} class="col-md-4">
      <div class="blog-entry">
        <div class="news-img">
          <img 
          src={foto} alt=""
          //  class="block-20"
           class={cardMini ? "card-img-top" : "block-20" }
            />
          <div class="meta-date">
            <span class="day">{day}</span>
            <span class="mos">{month}</span>
            <span class="yr">{year}</span>
          </div>
        </div>


        <div 
        // class="text p-4"
        class={cardMini ? "text px-1 mt-3" : "text p-4" }
        >
          <h3 class="heading">{title}</h3>
          <p>{admission}</p>

          {cardMini ? null : Button}
          
        </div>
      </div>
    </div>
  );
}

export default Card;
