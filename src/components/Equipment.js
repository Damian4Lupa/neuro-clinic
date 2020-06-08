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

const DoubleLeft = <img src={arrowLeft} className="carousel-arrow-left" />;
const DoubleRight = <img src={arrowRight} className="carousel-arrow-rigth" />;

function Equipment() {
  return (
    <section id="equipment" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div
            // class="wow fadeInDown" data-wow-delay="0.1s"
            >
              <div className="col-md-12">
                <h2 className="ser-title">Our equipment</h2>
                <hr className="botm-line" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col mt-5">
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
              <img src={equipment1} className="carouselImg" />
              <img src={equipment2} className="carouselImg" />
              <img src={equipment3} className="carouselImg" />
              <img src={equipment4} className="carouselImg" />
              <img src={equipment5} className="carouselImg" />
              <img src={equipment6} className="carouselImg" />
              <img src={equipment7} className="carouselImg" />
              <img src={equipment8} className="carouselImg" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipment;
