import React from "react";
import "./Projects.css";
import picture3 from "../Assets/whatsapp.PNG";
import picture2 from "../Assets/ge.PNG";
import picture1 from "../Assets/photo.jpg";
import tesla from "../Assets/tesla.PNG";
import social from "../Assets/social-app.png";
import hulu from "../Assets/hulu.png";
import shop from "../Assets/shop.png";
import realEstate from "../Assets/real-estate.png";

const Projects = () => {
  // global event
  const handleClick1 = (e) => {
    e.preventDefault();
    window.open("https://global-event.vercel.app/", "_blank");
  };
  // const handleClick2 = (e) => {
  //   e.preventDefault();
  //   window.open(
  //     "https://whatsapp-clone-4ad35ecu6-utsar.vercel.app/login",
  //     "_blank"
  //   );
  // };
  // tesla clone
  const handleClick3 = (e) => {
    e.preventDefault();
    window.open("https://tesla-clone-woad.vercel.app/", "_blank");
  };
  // real-estate
  const handleClick4 = (e) => {
    e.preventDefault();
    window.open("https://real-estate-utsar.vercel.app/", "_blank");
  };
  // hulu clone
  const handleClick5 = (e) => {
    e.preventDefault();
    window.open("https://hulu-utsar.vercel.app/", "_blank");
  };
  // shop project
  const handleClick6 = (e) => {
    e.preventDefault();
    window.open("https://shop-utsar.vercel.app/", "_blank");
  };

  return (
    <>
      <div className="projectsWrapper">
        <div className="projectContainer">
          <ul className="hs no-scrollbar">
            {/* real-estate project */}
            <li className="item">
              <img
                src={realEstate}
                alt="real-estate"
                onClick={handleClick4}
              ></img>
            </li>
            {/* tesla clone project */}
            <li className="item">
              <img src={tesla} alt="tesla-clone" onClick={handleClick3}></img>
            </li>
            {/* Shop project */}
            <li className="item">
              <img src={shop} alt="shop project" onClick={handleClick6}></img>
            </li>
            {/* global event project */}
            <li className="item">
              <img
                src={picture2}
                alt="global-event"
                onClick={handleClick1}
              ></img>
            </li>
            {/* Hulu clone project */}
            <li className="item">
              <img src={hulu} alt="hulu project" onClick={handleClick5}></img>
            </li>
            {/* whatsapp clone project */}
            <li className="item" style={{ cursor: "not-allowed" }}>
              <img
                src={picture3}
                alt="whatsapp-clone"
                // onClick={handleClick2}
              ></img>
            </li>
            {/* social-app project */}
            <li className="item" style={{ cursor: "not-allowed" }}>
              <img
                src={social}
                alt="social-app project"
                // onClick={handleClick4}
              ></img>
            </li>
            <li className="item" style={{ cursor: "not-allowed" }}>
              <img src={picture1} alt="work in progress"></img>
            </li>
            <li className="item" style={{ cursor: "not-allowed" }}>
              <img src={picture1} alt="work in progress"></img>
            </li>
            <li className="item" style={{ cursor: "not-allowed" }}>
              <img src={picture1} alt="work in progress"></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
