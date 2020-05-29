import React from "react";

import Intro from "../components/Intro";
import Boxes from "../components/Boxes";
import EmergencyIntro from '../components/EmergencyIntro'
import Partners from '../components/Partners'

function HomePage() {
  return (
    <>
      <Intro />
      <Boxes />
      <EmergencyIntro />
      <Partners />
    </>
  );
}

export default HomePage;
