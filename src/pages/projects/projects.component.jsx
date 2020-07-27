import React, { useState, useEffect } from "react";
import projectList from '../../components/projectList'

import { useHistory, Link, useParams, Outlet, useRouteMatch, Switch, Route } from "react-router-dom";

import ProjectShow from "../../components/project/project-show.component";
import "./projects.styles.css";

const Projects = () => {


  let match = useRouteMatch()




  const [projects, setProjects] = useState([]);


  useEffect(() => {
    setProjects(projectList)
  }, []);


  return (
    <div className="ul-container">
      <ul className="projects-container">
        {projects &&
          projects.map((project) => (
            <li key={project._id}>
              {console.log(project.name)}
                <Link to={`${match.url}/${project.name}`}>
                  {project.name}
                </Link>
            </li>
          ))}
      </ul>

      <marquee>
            This site is a work in progress. Thank you for being here!
      </marquee>




    </div>
  );
};

export default Projects;
