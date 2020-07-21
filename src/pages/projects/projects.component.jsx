import React, { useState, useEffect } from "react";
import projectList from '../../components/projectList'

import { useHistory, Link, useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../../components/navbar/navbar.component"

import ProjectShow from "../../components/project/project-show.component";
import "./projects.styles.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [clickedProject, setClickedProject] = useState(null);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    setProjects(projectList)
  }, []);


  const closeProject = () => setClickedProject(null);

  const params = useParams()

  return (
    <div className="ul-container">
        <NavBar />
      <ul className="projects-container">
        {projects &&
          projects.map((project) => (
            <li 
              onClick={(project) => {
                setClickedProject(project)
                // this.props.history.push("/work" + {project.title})
              }
              }
              key={project.name}>
                <Link to={
                  {
                    pathname: `/work/${project.name}`,
                    state: project
                  }
                  
                  
                }>{project.name}</Link>

            </li>

          ))}
      </ul>
    </div>
  );
};

export default Projects;
