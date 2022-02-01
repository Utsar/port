import React from "react";
import "./LandingFooter.css";

const LandingFooter = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLeft">
          <a href="mailto:utsaru@gmail.com">
            <div>FULLSTACK DEVELOPER</div>
            <div>OPEN FOR WORK</div>
          </a>
        </div>
        <div className="footerRight">
          <div>
            <a href="mailto:utsaru@gmail.com">EMAIL</a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/kristianutsar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
          <div>
            <a
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
