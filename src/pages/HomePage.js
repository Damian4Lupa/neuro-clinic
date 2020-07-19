import React, { Suspense, lazy } from "react";

import Loading from "../components/Loading";

const Intro = lazy(() => import("../components/Intro"));
const Boxes = lazy(() => import("../components/Boxes"));
const AboutShortInfo = lazy(() => import("../components/AboutShortInfo"));
const Motto = lazy(() => import("../components/Motto"));
const NewsShortInfo = lazy(() => import("../components/NewsShortInfo"));
const EmergencyIntro = lazy(() => import("../components/EmergencyIntro"));
const Partners = lazy(() => import("../components/Partners"));
const Equipment = lazy(() => import("../components/Equipment"));
const ServiceShortInfo = lazy(() => import("../components/ServiceShortInfo"));

function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Intro />
      <Boxes />
      {/* <AboutShortInfo />
      <Motto />
      <ServiceShortInfo />
      <Equipment />
      <EmergencyIntro />
      <NewsShortInfo />
      <Partners /> */}
    </Suspense>
  );
}

export default HomePage;
