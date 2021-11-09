import React from "react";
import "./Projects.css";
import picture3 from "../Assets/whatsapp.PNG";
import picture2 from "../Assets/ge.PNG";
import picture1 from "../Assets/photo.jpg";

const Projects = () => {
  return (
    <>
      <div className="projectsWrapper">
        <div class="projectContainer">
          <ul class="hs no-scrollbar">
            <li class="item">
              <img src={picture2} alt="picture"></img>
            </li>
            <li class="item">
              <img src={picture3} alt="picture"></img>
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
