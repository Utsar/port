import React from "react";
import "./Projects.css";
import picture3 from "../Assets/whatsapp.PNG";
import picture2 from "../Assets/ge.PNG";
import picture1 from "../Assets/photo.jpg";

const Projects = () => {
  const handleClick1 = (e) => {
    e.preventDefault();
    window.open("https://global-event.vercel.app/", "_blank");
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    window.open(
      "https://whatsapp-clone-4ad35ecu6-utsar.vercel.app/login",
      "_blank"
    );
  };

  return (
    <>
      <div className="projectsWrapper">
        <div class="projectContainer">
          <ul class="hs no-scrollbar">
            <li class="item">
              <img src={picture2} alt="picture" onClick={handleClick1}></img>
            </li>
            <li class="item">
              <img src={picture3} alt="picture" onClick={handleClick2}></img>
            </li>
            <li class="item">
              <img src={picture1} alt="picture"></img>
            </li>
            <li class="item">
              <img src={picture1} alt="picture"></img>
            </li>
            <li class="item">
              <img src={picture1} alt="picture"></img>
            </li>
            <li class="item">
              <img src={picture1} alt="picture"></img>
            </li>
            <li class="item">
              <img src={picture1} alt="picture"></img>
            </li>
            <li class="item">
              <img src={picture1} alt="picture"></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
