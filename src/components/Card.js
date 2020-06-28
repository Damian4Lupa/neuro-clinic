import React from "react";

const Button = (
  <button type="button" className="btn blue-btn">
    Read More
  </button>
);

// Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam minima iste porro facilis similique, odio impedit ipsam voluptatibus. Sit, officiis sed deserunt sunt illum placeat debitis quos esse. Nam.
// Aliquid libero error quis magni dolore amet aperiam. Ipsam commodi sapiente aliquam error quo eos incidunt neque, nulla obcaecati laboriosam quae eveniet quas eum sunt suscipit dolore nobis aperiam placeat?
// Tempore laborum a, nemo nisi quisquam esse ex fuga eaque quod modi totam officia quam tenetur voluptates? Unde, fugiat, modi sit, soluta quam voluptate eos ipsum nisi facilis impedit vitae.
// Optio, quae! Inventore architecto assumenda necessitatibus, quidem est ipsum reiciendis accusantium totam nostrum corporis ullam tempora consequatur quisquam, magni ducimus beatae sequi. Nam facilis excepturi suscipit porro laborum minus. Maxime.
// Molestiae quisquam ea iste vero nisi, qui maxime laboriosam recusandae, possimus ipsa quis. Quibusdam error quae, neque ipsum possimus doloribus qui aliquam repudiandae nesciunt, in reprehenderit, vel perspiciatis placeat nisi.
// Vitae sunt optio, porro minima sint debitis repellendus accusamus fugiat quod omnis facilis? Omnis accusantium doloribus veritatis magni distinctio vitae, sapiente velit minima quam laborum reprehenderit error consectetur veniam fuga?
// Tempora nostrum molestias sequi aut. Culpa harum, porro ab possimus in sapiente, corrupti nostrum veritatis architecto blanditiis eligendi maiores corporis quos laborum. Modi magnam reiciendis aspernatur, ipsam explicabo beatae neque!
// Nemo natus, voluptatum aliquam velit neque doloribus perspiciatis aut enim vel quibusdam ut, molestias ipsam! Nobis et suscipit fuga? Qui quas iste magnam velit obcaecati ipsum cupiditate tenetur eaque molestias.
// Distinctio repudiandae voluptatibus quibusdam, aspernatur voluptatem, molestias iure numquam nostrum esse officia nihil ad ipsum ea ut eligendi. Itaque vel recusandae sunt reiciendis similique labore cumque laborum ipsam saepe error!
// Debitis tenetur quam, sint impedit, eaque modi quos iure hic id dicta accusamus! Officiis nulla iure veniam sint iste? Iusto deserunt a non, enim voluptatem voluptates nulla eaque dolores nam?


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
