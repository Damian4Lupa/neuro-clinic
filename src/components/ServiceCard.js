import React from "react";
import "../styles/components/ServiceDetailedInfo.css";

function ServiceCard(props) {
  const { id, foto, title, description } = props;

  return (
    <article id={`service-card-${id}`} className="col-lg-4 col-md-6 icon-box">
      <div className="icon">
        <img src={foto} alt={title} />
      </div>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </article>
  );
}

export default ServiceCard;
