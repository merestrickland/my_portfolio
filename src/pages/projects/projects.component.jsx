import React, { useState, useEffect } from 'react'

import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

import Project from '../../components/project/project.component'


const Projects = ( { query }) => {

  const [projects, setProjects] = useState([])
  // const [isFetching, setFetching] = useState([])

  useEffect( () => {

    // let ignore = false;

    // async function fetchProjects(){
    //   const result = await axios('http://localhost:8000/projects/')
    //   if (!ignore) setProjects(result.data)
    // }

    // fetchProjects()
    // return () => { ignore = true; }

    axios.get('http://localhost:8000/projects/')
      .then(res => {
        // console.log(res.data)
        setProjects(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // useEffect(function fetch(){
  //   (async function(){
  //     setFetching(true);
  //     setProjects(await fetchProjects(query));
  //     setFetching(false)
  //   })()
  // }, [query])

  // if (isFetching) {
  //   return <div>Fetching projects ...</div>
  // }






  return (
    <div>
        {/* {projects.forEach(project => {
          return <Project project={project}/>
        })} */}
        {/* <Project project={projects}/> */}
        {console.log(projects)}
        
        
    </div>
    
  )
}

export default Projects;
