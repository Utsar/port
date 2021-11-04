import React from "react";
import "./LandingNav.css";

const LandingNav = () => {
  return (
    <>
      <div className="navbarContainer">
        <div className="navbarItems">
          <div>
            <a href="#">Kristian</a>
            <span>Portofilo</span>
          </div>
          <div>
            <a href="#">
              About
              <div></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingNav;
