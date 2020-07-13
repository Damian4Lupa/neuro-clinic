import React from "react";

import doctors from "../data/doctors";

import Doctor from "../components/Doctor";
import Motto from '../components/Motto'

const data = doctors.map((item) => (
  <Doctor
    id={item.id}
    key={item.id}
    foto={item.foto}
    name={item.name}
    position={item.position}
  />
));

function Doctors() {
  return (
    <section id="doctors" className="home-section-top">
      <div className="container">
        <div className="row">{data}</div>
      </div>
      <Motto />
    </section>
  );
}

export default Doctors;
