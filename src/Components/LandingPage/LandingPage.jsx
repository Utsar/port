import React from "react";

import LandingFooter from "../LandingFooter/LandingFooter";
import LandingNav from "../LandingNav/LandingNav";
import ScrollComponent from "../ScrollComponent/ScrollComponent";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <LandingNav />
      <ScrollComponent />

      <LandingFooter />
    </>
  );
};

export default LandingPage;
