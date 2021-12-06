import React from "react";
import "./LandingNav.css";

const LandingNav = () => {
  return (
    <>
      <div className="navbarContainer">
        <div className="navbarItems">
          <div>
            <a href="https://www.kristianutsar.com">KRISTIAN</a>
            <span>Portfolio</span>
          </div>
          {/* <div className="navAbout">
            <a href="#">
              About
              <div></div>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LandingNav;
