import React from "react";
import Projects from "../../Projects/Projects";

import LandingFooter from "../LandingFooter/LandingFooter";
import LandingNav from "../LandingNav/LandingNav";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <LandingNav />
      <Projects />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
