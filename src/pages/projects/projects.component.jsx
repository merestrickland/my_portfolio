import React, { useState, useEffect } from "react";
import projectList from "../../components/projectList";
import "./projects.styles.css"

import {
  Link,
  useRouteMatch
} from "react-router-dom";


const Projects = () => {
  let match = useRouteMatch();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectList);
  }, []);

  return (
    <div className="projects-container">
      <div className="ul-container">
        {projects &&
          projects.map((project) => (
            // <li key={project._id} className="projects-li">
            <div className="project-tile">
              <Link to={`${match.url}/${project.name}`} className="project-name">{project.name}</Link>

            </div>
            // </li>
          ))}
      {/* </ul> */}
        </div>
      <marquee>
        This site is a work in progress. Thank you for being here!
      </marquee>
    </div>
  );
};

export default Projects;
