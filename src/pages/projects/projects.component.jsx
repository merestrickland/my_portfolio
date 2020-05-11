import React, { useState, useEffect } from 'react'

import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import Project from '../../components/project/project.component'
import './projects.styles.css'


const Projects = () => {

  const [projects, setProjects] = useState([])
  // const [loading, setLoading] = useState(false)


  useEffect(() => {
    getReqProj()
  }, [])

  const getReqProj = () => {
    // setLoading(true)
      axios.get('https://radiant-basin-61864.herokuapp.com/projects').then(res => {
        // setLoading(false)
        setProjects(res.data);
      })
  }

return (
  <div>
      {console.log(projects)}

    <ul className='container'>
    {/* {loading ? 'LOADING....' : ''} */}
        {projects && projects.map(project => (
          // <div key={project._id}>{project.name}</div>
          <li key={project._id}
            className='project-card'><Project project={project}/></li>
        ))}
    </ul>
  </div>
)
}

export default Projects;
