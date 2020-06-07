import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

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

const DoubleLeft = <img src={arrowLeft} class="carousel-arrow-left" />;
const DoubleRight = <img src={arrowRight} class="carousel-arrow-rigth" />;

function Equipment() {
  return (
    <section id="equipment" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
            // class="wow fadeInDown" data-wow-delay="0.1s"
            >
              <div class="col-md-12">
                <h2 class="ser-title">Our equipment</h2>
                <hr class="botm-line" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col mt-5">
            <Carousel
              arrowLeft={DoubleLeft}
              arrowRight={DoubleRight}
              addArrowClickHandler
              slidesPerScroll={1}
              slidesPerPage={4}
              infinite
              autoPlay={3500}
              animationSpeed={1000}
            >
              <img src={equipment1} class="carouselImg" />
              <img src={equipment2} class="carouselImg" />
              <img src={equipment3} class="carouselImg" />
              <img src={equipment4} class="carouselImg" />
              <img src={equipment5} class="carouselImg" />
              <img src={equipment6} class="carouselImg" />
              <img src={equipment7} class="carouselImg" />
              <img src={equipment8} class="carouselImg" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipment;
