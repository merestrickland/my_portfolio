import React, { useState, useEffect } from 'react'

import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import Project from '../../components/project/project.component'


const Projects = () => {

  const [projects, setProjects] = useState([])
  // const [loading, setLoading] = useState(false)


  useEffect(() => {
    getReqProj()
  }, [])

  const getReqProj = () => {
    // setLoading(true)
      axios.get('http://localhost:8000/projects/').then(res => {
        // setLoading(false)
        setProjects(res.data);
      })
  }

return (
  <div className='row'>
    <ul>
    {/* {loading ? 'LOADING....' : ''} */}
        {projects && projects.map(project => (
          // <div key={project._id}>{project.name}</div>
          <li key={project._id}><Project project={project}/></li>
        ))}
    </ul>
  </div>
)
}

export default Projects;
