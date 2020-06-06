import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "../styles/Equipment.css";

import test from "../img/test.jpg";
import arrowLeft from '../img/Equipment/double-left.png'
import arrowRight from '../img/Equipment/double-right.png'

const DoubleLeft = <img src={arrowLeft} class="carousel-arrow-left" />
const DoubleRight = <img src={arrowRight} class="carousel-arrow-rigth" />



function Equipment() {
  return (
    <section id="facilities" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
            // class="wow fadeInDown" data-wow-delay="0.1s"
            >

<div class="col-md-12">
                <h2 class="ser-title">Our facilities</h2>
                <hr class="botm-line" />
              </div>


              {/* <div class="section-heading text-center">
                <h2 class="h-bold">Our facilities</h2>
                <p>
                  Ea melius ceteros oportere quo, pri habeo viderer facilisi ei
                </p>
              </div> */}


            </div>
            {/* <div class="divider-short"></div> */}
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
            // arrows
            >
              <img src={test} class="carouselImg" />
              <img src={test} class="carouselImg" />
              <img src={test} class="carouselImg" />
              <img src={test} class="carouselImg" />
              <img src={test} class="carouselImg" />
            </Carousel>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipment;
