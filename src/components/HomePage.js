import React from "react";
import "../styles/HomePage.css";
// import '../styles/style.css'
// import '../styles/animate.css'
import doctor from "../img/HomePage/img-3.png";
import check from "../img/HomePage/check3.svg";

import hospitalUser from '../img/HomePage/hospital-user.svg'
import notesMedical from '../img/HomePage/notes-medical.svg'
import tasks from '../img/HomePage/tasks.svg'
import thList from '../img/HomePage/th-list.svg'
import userMd from '../img/HomePage/user-md.svg'


function HomePage() {
  return (
    <>
      {/* intro */}
      <section id="intro" class="intro">
        <div class="intro-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div
                  class="wow fadeInDown"
                  data-wow-offset="0"
                  data-wow-delay="0.1s"
                >
                  <h2 class="h-ultra">Medicio medical group</h2>
                </div>
                <div
                  class="wow fadeInUp"
                  data-wow-offset="0"
                  data-wow-delay="0.1s"
                >
                  <h4 class="h-light">
                    Provide best quality healthcare for you
                  </h4>
                </div>
                <div class="well well-trans">
                  <div class="wow fadeInRight" data-wow-delay="0.1s">
                    <ul class="lead-list">
                      <li>
                        <img src={check} alt="" height="30" />

                        <span class="list">
                          <strong>Affordable monthly premium packages</strong>
                          <br />
                          Lorem ipsum dolor sit amet, in verterem persecuti vix,
                          sit te meis
                        </span>
                      </li>
                      <li>
                        <img src={check} alt="" height="30" />
                        <span class="list">
                          <strong>Choose your favourite doctor</strong>
                          <br />
                          Lorem ipsum dolor sit amet, in verterem persecuti vix,
                          sit te meis
                        </span>
                      </li>
                      <li>
                        <img src={check} alt="" height="30" />
                        <span class="list">
                          <strong>Only use friendly environment</strong>
                          <br />
                          Lorem ipsum dolor sit amet, in verterem persecuti vix,
                          sit te meis
                        </span>
                      </li>
                    </ul>
                    <p class="text-right wow bounceIn" data-wow-delay="0.4s">
                      <a href="#" class="btn btn-skin btn-lg">
                        Learn more <i class="fa fa-angle-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <img src={doctor} class="img-responsive" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* boxes */}
      <section id="boxes" class=" boxes home-section paddingtop-80">
        <div class="container">
          <div class="row">
            <div class="col-sm-3 col-md-3">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <div class="box text-center">
                  {/* <i class="fa fa-check fa-3x circled bg-skin"></i> */}
                  <img src={check} alt="" class="fa fa-check fa-3x circled bg-skin"/>
               
                  <h4 class="h-bold">Make an appoinment</h4>
                  <p>
                    Lorem ipsum dolor sit amet, nec te mollis utroque
                    honestatis, ut utamur molestiae vix, graecis eligendi ne.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <div class="box text-center">
                <img src={tasks} alt="" class="fa fa-check fa-3x circled bg-skin"/>
                  <h4 class="h-bold">Choose your package</h4>
                  <p>
                    Lorem ipsum dolor sit amet, nec te mollis utroque
                    honestatis, ut utamur molestiae vix, graecis eligendi ne.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <div class="box text-center">
                <img src={userMd} alt="" class="fa fa-check fa-3x circled bg-skin"/>
                  <h4 class="h-bold">Help by specialist</h4>
                  <p>
                    Lorem ipsum dolor sit amet, nec te mollis utroque
                    honestatis, ut utamur molestiae vix, graecis eligendi ne.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <div class="box text-center">
                <img src={notesMedical} alt="" class="fa fa-check fa-3x circled bg-skin"/>
                  <h4 class="h-bold">Get diagnostic report</h4>
                  <p>
                    Lorem ipsum dolor sit amet, nec te mollis utroque
                    honestatis, ut utamur molestiae vix, graecis eligendi ne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
