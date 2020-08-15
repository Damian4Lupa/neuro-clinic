import React from "react";

import "../styles/components/PriceTable.css";

function PriceTable() {
  return (
    <section id="price-table" className="home-section-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="box">
              <h3>Free</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <button type="button" className="btn blue-btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="box">
              <h3>Personal</h3>
              <h4>
                <sup>$</sup>19<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <button type="button" className="btn blue-btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <span className="recommended">recommend</span>
              <h3>Family</h3>
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
              <div className="btn-wrap">
                <button type="button" className="btn blue-btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <h3>Premium</h3>
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
              <div className="btn-wrap">
                <button type="button" className="btn blue-btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceTable;
