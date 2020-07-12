import React from "react";

import "../styles/components/ServiceDetailedInfo.css";

import ServiceCard from "../components/ServiceCard";

import data from "../data/services";

const services = data.map((item) => (
  <ServiceCard
    id={item.id}
    key={item.id}
    foto={item.foto}
    title={item.title}
    description={item.description}
  />
));

function ServiceDetailedInfo() {
  return (
    <section id="service-detailed-info" className="home-section">
      <div className="container">
        <div className="section-title">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            labore voluptates ex unde dolorem molestias repudiandae similique
            qui dolore sed. Sequi magni similique ipsum nisi? Exercitationem
            aliquam laborum voluptatum laudantium. Quos tempore a obcaecati
            libero nulla deserunt nobis quas voluptas error dolorum neque omnis
            similique animi, maiores, officia hic! Quos tenetur nesciunt,
            voluptatum ipsa aliquam eligendi sint? Neque, exercitationem
            recusandae?
          </p>
        </div>

        <div className="row">{services}</div>
      </div>
    </section>
  );
}

export default ServiceDetailedInfo;
