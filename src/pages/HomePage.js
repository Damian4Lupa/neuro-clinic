import React, { Suspense, lazy } from "react";

import Loading from "../components/Loading";

// import Intro from "../components/Intro";
// import Boxes from "../components/Boxes";
// import AboutShortInfo from '../components/AboutShortInfo'
// import Motto from '../components/Motto'
// import NewsShortInfo from "../components/NewsShortInfo";
// import EmergencyIntro from "../components/EmergencyIntro";
// import Partners from "../components/Partners";
// import Equipment from '../components/Equipment'
// import Service from '../components/Service'

const Intro = lazy(() => import("../components/Intro"));
const Boxes = lazy(() => import("../components/Boxes"));
const AboutShortInfo = lazy(() => import("../components/AboutShortInfo"));
const Motto = lazy(() => import("../components/Motto"));
const NewsShortInfo = lazy(() => import("../components/NewsShortInfo"));
const EmergencyIntro = lazy(() => import("../components/EmergencyIntro"));
const Partners = lazy(() => import("../components/Partners"));
const Equipment = lazy(() => import("../components/Equipment"));
const Service = lazy(() => import("../components/Service"));

function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Intro />
      <Boxes />
      <AboutShortInfo />
      <Motto />
      <Service />
      <Equipment />
      <EmergencyIntro />
      <NewsShortInfo />
      <Partners />
    </Suspense>
  );
}

export default HomePage;
