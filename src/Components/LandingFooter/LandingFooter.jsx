import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "./LandingFooter.css";

const LandingFooter = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLeft">
          <a className="footerLeftItems" href="mailto:utsaru@gmail.com">
            <div>FULLSTACK DEVELOPER</div>
            <div className="footerLeftBreak"></div>
            <div className="footerLeftBreak1"></div>
            <div>OPEN FOR WORK</div>
          </a>
        </div>
        <div className="footerRight">
          <div>
            <a className="footerRightEmail" href="mailto:utsaru@gmail.com">
              EMAIL
            </a>
          </div>
          <div>
            <a
              className="footerRightLinkedIn"
              href="https://www.linkedin.com/in/kristianutsar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
          <div>
            <a
              className="footerRightGithub"
              href="https://github.com/Utsar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
