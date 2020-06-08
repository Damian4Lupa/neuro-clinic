import React from "react";

import Intro from "../components/Intro";
import Boxes from "../components/Boxes";
import AboutShortInfo from '../components/AboutShortInfo'
import Motto from '../components/Motto'
import NewsShortInfo from "../components/NewsShortInfo";
import EmergencyIntro from "../components/EmergencyIntro";
import Partners from "../components/Partners";
import Equipment from '../components/Equipment'
import Service from '../components/Service'

function HomePage() {
  return (
    <>
      <Intro />
      <Boxes />
      <AboutShortInfo />
      <Motto />
      <Service />
      <Equipment />
      <EmergencyIntro />
      <NewsShortInfo />
      <Partners />
    </>
  );
}

export default HomePage;
