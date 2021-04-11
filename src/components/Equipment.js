import React, { useState } from "react";
import $ from "jquery";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../styles/components/Equipment.css";
import equipment1_300 from "../img/Equipment/equipment1-300.jpg";
import equipment1_800 from "../img/Equipment/equipment1-800.jpg";
import equipment2_300 from "../img/Equipment/equipment2-300.jpg";
import equipment2_800 from "../img/Equipment/equipment2-800.jpg";
import equipment3_300 from "../img/Equipment/equipment3-300.jpg";
import equipment3_800 from "../img/Equipment/equipment3-800.jpg";
import equipment4_300 from "../img/Equipment/equipment4-300.jpg";
import equipment4_800 from "../img/Equipment/equipment4-800.jpg";
import equipment5_300 from "../img/Equipment/equipment5-300.jpg";
import equipment5_800 from "../img/Equipment/equipment5-800.jpg";
import equipment6_300 from "../img/Equipment/equipment6-300.jpg";
import equipment6_800 from "../img/Equipment/equipment6-800.jpg";
import equipment7_300 from "../img/Equipment/equipment7-300.jpg";
import equipment7_800 from "../img/Equipment/equipment7-800.jpg";
import equipment8_300 from "../img/Equipment/equipment8-300.jpg";
import equipment8_800 from "../img/Equipment/equipment8-800.jpg";
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
              <picture>
                <source
                  srcSet={`${equipment1_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment1_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcSet={`${equipment2_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment2_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcSet={`${equipment3_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment3_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcSet={`${equipment4_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment4_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcSet={`${equipment5_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment5_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcSet={`${equipment6_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment6_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcSet={`${equipment7_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment7_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcSet={`${equipment8_300} 1x`}
                  media="(max-width: 1000px)"
                />
                <img
                  srcSet={`${equipment8_800} 2x`}
                  className="carouselImg"
                  alt=""
                />
              </picture>
            </Carousel>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Equipment;
