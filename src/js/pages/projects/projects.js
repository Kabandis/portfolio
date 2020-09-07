import React from "react"

import html from "../../../assets/img/projects/1.png";

const Projects = () => {
  return (
    <div className="background">
      <div className="projects_wrapper"> 
        <div className="projects_container"> 
          <a className="projects_item" href="#">
            <img className="projects_img" src={html} alt="project_image" />
            <p className="projects_header">
              Перша робота
            </p>
          </a>

          
          
        </div>
      </div>
    </div>
  )
}

export default Projects