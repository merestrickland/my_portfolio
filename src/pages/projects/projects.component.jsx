import React, { useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";
import axios from "axios";

import Project from "../../components/project/project.component";
import "./projects.styles.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [clickedProject, setClickedProject] = useState(null);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    getReqProj();
  }, []);

  useEffect(() => {
    console.log(clickedProject);
  });

  const getReqProj = () => {
    // setLoading(true)
    axios
      .get("https://radiant-basin-61864.herokuapp.com/projects")
      .then((res) => {
        // setLoading(false)
        setProjects(res.data);
      });
  };

  const closeProject = () => setClickedProject(null);

  if (clickedProject) {
    return (
      <div className="project-show-container">
        <div className="project-show-titlecard">
          <div className="link-container">
            <div className="project-show-links-left">
              {clickedProject.github && (
                <a href={clickedProject.github} target="_blank">
                  <img
                    className="link-image"
                    src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/githubLogo+copy.png"
                    alt="gitHub"
                  />
                </a>
              )}

              {clickedProject.demoVid && (
                <a href={clickedProject.demoVid} target="_blank">
                  <img
                    className="link-image"
                    src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/web.png"
                    alt="demo"
                    target="_blank"
                  />
                </a>
              )}
            </div>

            <div className="project-show-links-right">
              <img
                onClick={() => closeProject()}
                className="link-image"
                src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/closeIcon.png"
              />
            </div>
          </div>

          <div className="project-show-info">
            <div className="project-show-title">{clickedProject.name}</div>
            <div className="project-show-description">
              {clickedProject.description}
            </div>
            <div>
            <img
              src={clickedProject.image}
              className="project-show-image"
            />
            </div>
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ul-container">
      <ul className="projects-container">
        {projects &&
          projects.map((project) => (
            <li
              key={project._id}
              className="project-card"
              onClick={() => setClickedProject(project)}
            >
              <Project project={project} key={project._id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Projects;
