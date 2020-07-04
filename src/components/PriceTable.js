import React from "react";

import "../styles/components/PriceTable.css";

function PriceTable() {
  return (
    <section id="price-table" className="home-section">
      <div className="container">
        <div className="row">
          <div class="col-lg-3 col-md-6">
            <div
              class="box aos-init aos-animate"
            >
              <h3>Free</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li class="na">Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div
              class="box featured aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Business</h3>
              <h4>
                <sup>$</sup>19<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div
              class="box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Developer</h3>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div
              class="box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span class="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4>
                <sup>$</sup>49<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceTable;
