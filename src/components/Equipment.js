import React, { useState } from "react";
import $ from "jquery";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "../styles/components/Equipment.css";

import equipment1 from "../img/Equipment/equipment1.jpg";
import equipment2 from "../img/Equipment/equipment2.jpg";
import equipment3 from "../img/Equipment/equipment3.jpg";
import equipment4 from "../img/Equipment/equipment4.jpg";
import equipment5 from "../img/Equipment/equipment5.jpg";
import equipment6 from "../img/Equipment/equipment6.jpg";
import equipment7 from "../img/Equipment/equipment7.jpg";
import equipment8 from "../img/Equipment/equipment8.jpg";

import arrowLeft from "../img/Equipment/double-left.png";
import arrowRight from "../img/Equipment/double-right.png";

const DoubleLeft = (
  <img src={arrowLeft} className="carousel-arrow-left" alt="left arrow" />
);
const DoubleRight = (
  <img src={arrowRight} className="carousel-arrow-rigth" alt="rihtg arrow" />
);

function Equipment() {
  const [width, setWidth] = useState(0);

  $(window).resize(function () {
    window.location.reload();
  });

  $(window).ready(function () {
    let width = $(window).width();

    if (width <= 720) {
      setWidth(1);
    } else if (width <= 800) {
      setWidth(2);
    } else if (width <= 1024) {
      setWidth(3);
    } else {
      setWidth(4);
    }
  });

  return (
    <section id="equipment" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-3 mr-4">
            <div className="section-title">
              <h2 className="ser-title">Our equipment</h2>
              <hr className="botm-line" />
            </div>
          </div>
        </div>
      </div>

      <article className="container">
        <div className="row">
          <div className="col">
            <Carousel
              arrowLeft={DoubleLeft}
              arrowRight={DoubleRight}
              addArrowClickHandler
              slidesPerScroll={1}
              slidesPerPage={width}
              infinite
              autoPlay={4000}
              animationSpeed={1000}
            >
              <img src={equipment1} className="carouselImg" alt="" />
              <img src={equipment2} className="carouselImg" alt="" />
              <img src={equipment3} className="carouselImg" alt="" />
              <img src={equipment4} className="carouselImg" alt="" />
              <img src={equipment5} className="carouselImg" alt="" />
              <img src={equipment6} className="carouselImg" alt="" />
              <img src={equipment7} className="carouselImg" alt="" />
              <img src={equipment8} className="carouselImg" alt="" />
            </Carousel>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Equipment;
