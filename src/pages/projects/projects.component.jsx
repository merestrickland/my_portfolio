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

  if (clickedProject) {
    return (
      <div className="project-show-container">
        <div className="project-show-titlecard">
          <div className="project-show-links-left">
            {/* <div className='test'></div>
              <div className='test'></div> */}

            <a href={clickedProject.demoVid}>
              <img
                className="link-image"
                src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/githubLogo+copy.png"
              />
            </a>
            <a href={clickedProject.demoVid}>
              <img
                className="link-image"
                src="https://meredith-strickland-portfolio.s3.amazonaws.com/Portfolio/web.png"
              ></img>
            </a>
          </div>
          <div>{/* X out */}</div>

          <div className="project-show-info">
            <div className="project-show-title">{clickedProject.name}</div>
            <div className="project-show-description">
              {clickedProject.description}
            </div>
            <img
              src={clickedProject.image}
              className="project-show-image"
            ></img>
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
