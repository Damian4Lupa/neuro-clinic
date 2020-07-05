import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/pages/Sercive.css";

import EmergencyIntro from '../components/EmergencyIntro'

import support1 from "../img/Service/support1.svg";
import counseling from "../img/Service/counseling.svg";
import emergency1 from "../img/Service/emergency1.svg";
import surgery from "../img/Service/surgery.svg";
import premium from "../img/Service/premium.svg";
import lab1 from "../img/Service/lab1.svg";

function Sercive() {
  return (
    <>
    <section id="sercive" className="home-section">
      <div className="container">
        <div className="row">

          <div className="col-6">

            <div className="service-info">
              <div className="icon">
                <img src={support1} alt="" />
              </div>
              <div className="icon-info">
                <h4>24 Hour Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem facilis, numquam ut id culpa nulla eum officiis
                  illum ipsum ratione quos atque quo, exercitationem facere,
                  minus quod reiciendis similique sed! Provident aliquid maiores
                  error, dolorum atque vero enim adipisci aperiam consequatur
                  nobis inventore, labore nesciunt vitae, blanditiis qui
                  consectetur! Vel quod quaerat, velit cum doloremque
                  consequatur totam recusandae quisquam et.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
                <img src={emergency1} alt="" />
              </div>
              <div className="icon-info">
                <h4>Emergency Services</h4>
                <p>
                  Facere maiores numquam asperiores unde sit cupiditate ullam
                  rerum qui ducimus eius, officiis neque amet quibusdam! Tenetur
                  consectetur explicabo quia temporibus natus officia sed fugiat
                  voluptas consequatur saepe. Veritatis, obcaecati. Quos minima
                  quis vero repellat et quaerat ducimus tenetur similique itaque
                  quibusdam tempore eaque ab ullam labore neque nostrum eius
                  reprehenderit vel harum beatae sint, possimus adipisci
                  blanditiis? Praesentium, provident.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
                <img src={lab1} alt="" />
              </div>
              <div className="icon-info">
                <h4>Medical Lab</h4>
                <p>
                  Nam ad ea illum vitae quis perspiciatis deleniti, nulla
                  reiciendis odio consectetur animi minus voluptatem. Commodi
                  quod laboriosam praesentium at, excepturi hic corrupti animi
                  maxime tenetur temporibus cum tempora voluptatibus! Ut,
                  veritatis voluptate aut, labore ea ipsa sapiente, doloremque
                  sit est assumenda tempora! Perferendis, quidem! Ipsa porro
                  minus minima mollitia. Repudiandae adipisci iusto reiciendis
                  error architecto quod facere eius reprehenderit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="service-info">
              <div className="icon">
                <img src={counseling} alt="" />
              </div>
              <div className="icon-info">
                <h4>Medical Counseling</h4>
                <p>
                  Cumque, blanditiis alias autem, doloremque ipsum nesciunt
                  maxime aperiam, asperiores distinctio explicabo doloribus.
                  Labore distinctio officiis recusandae? Impedit quibusdam hic
                  autem tempora eius ipsum molestias sit eveniet, mollitia
                  eligendi officia. Voluptates neque alias nobis ab eveniet
                  eligendi odit deleniti atque ad porro totam magni, minus
                  reprehenderit doloremque eius nesciunt, dignissimos sed at
                  distinctio optio reiciendis, perspiciatis ducimus? Obcaecati,
                  quaerat aut.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
                <img src={surgery} alt="" />
              </div>
              <div className="icon-info">
                <h4>Surgery</h4>
                <p>
                  Sint magni dignissimos blanditiis doloribus earum iste, ullam
                  aliquid maiores eius a ea similique. Sapiente, omnis quaerat
                  ex quidem repellendus corrupti commodi eligendi quasi beatae,
                  similique architecto saepe voluptate ratione! Quisquam illo
                  voluptate dolorem soluta nobis dolore. Ratione et ipsum,
                  facilis cum porro magni aliquid aliquam voluptatibus adipisci
                  dolorum, eius iusto hic quo sint eos repudiandae enim
                  voluptatum totam quisquam.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
                <img src={premium} alt="" />
              </div>
              <div className="icon-info">
                <h4>Premium Healthcare</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem facilis, numquam ut id culpa nulla eum officiis
                  illum ipsum ratione quos atque quo, exercitationem facere,
                  minus quod reiciendis similique sed! Provident aliquid maiores
                  error, dolorum atque vero enim adipisci aperiam consequatur
                  nobis inventore, labore nesciunt vitae, blanditiis qui
                  consectetur! Vel quod quaerat, velit cum doloremque
                  consequatur totam recusandae quisquam et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <EmergencyIntro />
    </>
  );
}

export default Sercive;
